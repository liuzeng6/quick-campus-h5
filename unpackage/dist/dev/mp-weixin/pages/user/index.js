"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  _easycom_tabbar2();
}
const _easycom_tabbar = () => "../../components/tabbar/tabbar2.js";
if (!Math) {
  _easycom_tabbar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      checkedIndex: "4"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xueXi/Uniapp/quick-campus-h5/pages/user/index.vue"]]);
wx.createPage(MiniProgramPage);
