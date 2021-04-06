
module.exports = (results) => {
  const audits = results.lhr.audits;

  const responseJson = {
    'eventType': 'Lighthouse',
    // 'device': device,
    'userAgent': results.lhr.userAgent,
    'requestedUrl': results.lhr.requestedUrl,
    // 'timestamp': date,
    'performanceScore': results.lhr.categories.performance.score,
    'accessibilityScore': results.lhr.categories.accessibility.score
  }

  for (audit in audits) {
    responseJson[audit + "_numericValue"] = audits[audit].numericValue;
    responseJson[audit + "_score"] = audits[audit].score;
  };

  return responseJson;
};
