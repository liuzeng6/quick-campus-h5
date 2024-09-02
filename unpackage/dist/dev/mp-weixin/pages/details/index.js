"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utlis/request.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.topicsData)
      };
    };
  }
};
wx.createPage(_sfc_main);
