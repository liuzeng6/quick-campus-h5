"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  (_easycom_uni_icons2 + _easycom_tabbar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_tabbar = () => "../../components/tabbar/tabbar2.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_tabbar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const toCommented = () => {
      common_vendor.index.navigateTo({
        url: "/pages/all/commented/index"
      });
    };
    const toLiked = () => {
      common_vendor.index.navigateTo({
        url: "/pages/all/liked/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "hand-up",
          size: "56rpx",
          color: "#F66560"
        }),
        b: common_vendor.p({
          type: "right",
          size: "34rpx",
          color: "#3B3849"
        }),
        c: common_vendor.o(toLiked),
        d: common_vendor.p({
          type: "hand-up",
          size: "56rpx",
          color: "#07BE75"
        }),
        e: common_vendor.p({
          type: "right",
          size: "34rpx",
          color: "#3B3849"
        }),
        f: common_vendor.o(toCommented),
        g: common_vendor.p({
          checkedIndex: "3"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-780fc0ad"]]);
wx.createPage(MiniProgramPage);
