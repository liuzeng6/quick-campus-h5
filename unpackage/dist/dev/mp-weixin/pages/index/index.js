"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  (_easycom_navbar + tabbar)();
}
const tabbar = () => "../../components/tabbar/tabbar2.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let barHeight = common_vendor.ref(0);
    const getStatusHeight = (navBarHeight) => {
      barHeight.value = navBarHeight;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getStatusHeight),
        b: common_vendor.p({
          isHome: true
        }),
        c: common_vendor.p({
          checkedIndex: "0"
        }),
        d: common_vendor.s("margin-top:" + common_vendor.unref(barHeight) + "rpx")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/xueXi/Uniapp/quick-campus-h5/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
