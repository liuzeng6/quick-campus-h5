"use strict";
const common_vendor = require("../common/vendor.js");
require("./modules/user.js");
require("./modules/config.js");
const pinai = common_vendor.createPinia();
exports.pinai = pinai;
