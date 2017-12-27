const wxa = require("./wxa");
const fs = require("fs");

(async () => {
  const templates = await wxa.getTemplates(0, 10);
  console.log(templates);
})();
