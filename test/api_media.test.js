const wxa = require("./wxa");

(async () => {
  console.log(await wxa.uploadImage("./images/1.png"));
  console.log(
    await wxa.getMedia(
      "pPGUCt34hSFywkvC80eYC4EHb8Oz0PnpYd9UU_VbXla5CFcFBMOzgFMqSo08VU4g"
    )
  );
})();
