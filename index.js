const core = require("@actions/core");
const fetch = require("node-fetch");
const createResponseData = require('./createResponseData');

const OPTS = {
  url: core.getInput("url") || "",
  apikey: core.getInput("apikey") || "",
  data: createResponseData(core.getInput("data")) || "{}"
};

(async () => {
  const res = await fetch(OPTS.url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'X-Insert-Key': OPTS.apikey },
    body: OPTS.data
  });

  console.log(`Response: ${res.status} ${res.statusText}`);

  if (!res.ok) {
    core.setFailed(`Reaching webhook failed!`);
    return false;
  }

  return true;
})();
