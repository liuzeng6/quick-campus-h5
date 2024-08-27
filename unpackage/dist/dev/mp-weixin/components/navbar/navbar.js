"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "navbar",
  props: {
    isHome: {
      tyope: Boolean,
      default: false
    }
  },
  emits: ["getStatusHeight"],
  setup(__props, { emit }) {
    const statusHeight = common_vendor.ref(0);
    const navHeight = common_vendor.ref(0);
    const menu = common_vendor.reactive(common_vendor.index.getMenuButtonBoundingClientRect());
    const lineHeight = common_vendor.ref(0);
    const height = common_vendor.ref(0);
    common_vendor.onMounted(() => {
      setStatusBarHeight();
      let height2 = statusHeight.value + navHeight.value;
      emit("getStatusHeight", height2);
    });
    const setStatusBarHeight = () => {
      const { system, statusBarHeight, deviceModel } = common_vendor.index.getSystemInfoSync();
      statusHeight.value = statusBarHeight * 2;
      const isIOS = system.indexOf("IOS");
      if (isIOS) {
        navHeight.value = 88;
        lineHeight.value = deviceModel.includes("14") || deviceModel.includes("15") ? 0 : menu.height * 2;
        height.value = deviceModel.includes("14") || deviceModel.includes("15") ? menu.height * 2 : navHeight.value;
      } else {
        navHeight.value = 96;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s("height:" + statusHeight.value + "rpx;background-color:#f3f3f3"),
        b: __props.isHome
      }, __props.isHome ? {
        c: common_vendor.s("height:" + menu.height * 2 + "rpx;line-height:" + lineHeight.value + "rpx;margin-top:" + (menu.top * 2 - statusHeight.value) + "rpx;margin-left: 32rpx; margin-right:" + (menu.width * 2 + 24) + "rpx;background-color:#f4f4f4; border-radius: 200rpx; text-align:center;width:260rpx"),
        d: common_vendor.s("height:" + height.value + "rpx;line-height:" + height.value + "rpx;padding-left:20rpx;background-color:#f3f3f3")
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eaf4c2e5"], ["__file", "D:/xueXi/Uniapp/quick-campus-h5/components/navbar/navbar.vue"]]);
wx.createComponent(Component);
