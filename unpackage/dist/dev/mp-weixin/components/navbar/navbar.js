"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "navbar",
  props: {
    isHome: {
      tyope: Boolean,
      default: false
    }
  },
  emits: ["getStatusHeight"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const statusHeight = common_vendor.ref(0);
    const navHeight = common_vendor.ref(0);
    const menuData = common_vendor.index.getMenuButtonBoundingClientRect && common_vendor.index.getMenuButtonBoundingClientRect() || { width: 87, height: 32, left: 281, top: 24, right: 368 };
    const menu = common_vendor.reactive(menuData);
    console.log(menu);
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
        c: common_assets._imports_0$1,
        d: common_vendor.s("height:" + menu.height * 2 + "rpx;line-height:" + lineHeight.value + "rpx;margin-top:" + (menu.top * 2 - statusHeight.value) + "rpx;margin-left: 32rpx; margin-right:" + (menu.width * 2 + 24) + "rpx;background-color:#f4f4f4; border-radius: 200rpx; text-align:center;width:260rpx"),
        e: common_vendor.s("height:" + height.value + "rpx;line-height:" + height.value + "rpx;padding-left:20rpx;background-color:#f3f3f3")
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eaf4c2e5"]]);
wx.createComponent(Component);
