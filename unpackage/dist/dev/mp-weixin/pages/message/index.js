"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  (_easycom_up_icon2 + _easycom_tabbar2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_tabbar = () => "../../components/tabbar/tabbar2.js";
if (!Math) {
  (_easycom_up_icon + _easycom_tabbar)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      name: "thumb-up",
      size: "24px",
      color: "red"
    }),
    b: common_vendor.p({
      name: "chat",
      size: "24px",
      color: "#00ff00"
    }),
    c: common_vendor.p({
      checkedIndex: "3"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-780fc0ad"]]);
wx.createPage(MiniProgramPage);
