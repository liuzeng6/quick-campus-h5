"use strict";
const common_vendor = require("../common/vendor.js");
require("./modules/user.js");
const pinai = common_vendor.createPinia();
pinai.use(common_vendor.src_default);
exports.pinai = pinai;
