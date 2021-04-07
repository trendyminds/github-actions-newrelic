const core = require("@actions/core");
const fetch = require("node-fetch");
const pick = require('lodash.pick');


const OPTS = {
  url: core.getInput("url") || "",
  apikey: core.getInput("apikey") || "",
  data: core.getInput("data") || "{}"
};


(async () => {
  const newrelicArray = [];
  console.log(OPTS.data, 'test');
  OPTS.data.map(result => {
    newrelicArray.push(pick(result, 'rawData'));
  });
  console.log(newrelicArray);

  const res = await fetch(OPTS.url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'X-Insert-Key': OPTS.apikey },
    body: newrelicArray
  });

  console.log(`Response: ${res.status} ${res.statusText}`);

  if (!res.ok) {
    core.setFailed(`Reaching webhook failed!`);
    return false;
  }

  return true;
})();
