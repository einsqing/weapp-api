const wxa = require("./wxa");

(async () => {
  const templates = await wxa.getTemplates(0, 10);
  console.log(templates);
})();
