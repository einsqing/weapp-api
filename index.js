const API = require("./lib/api_common");

API.mixin(require("./lib/api_analysis"));
API.mixin(require("./lib/api_nearby"));
API.mixin(require("./lib/api_message"));
API.mixin(require("./lib/api_qrcode"));
API.mixin(require("./lib/api_template"));
API.mixin(require("./lib/api_user"));
API.mixin(require("./lib/api_media"));

module.exports = API;
