"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_index = require("../../api/index.js");
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
    let topicList = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      getHotTopics();
    });
    const getStatusHeight = (navBarHeight) => {
      barHeight.value = navBarHeight;
    };
    const getHotTopics = () => {
      api_index.getTopics().then((res) => {
        topicList.value = res.data.data;
      });
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
        d: common_assets._imports_0,
        e: common_assets._imports_1,
        f: common_assets._imports_2,
        g: common_vendor.s("margin-top:" + common_vendor.unref(barHeight) + "rpx"),
        h: common_assets._imports_3,
        i: common_vendor.f(common_vendor.unref(topicList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.n(item.id <= 3 ? "top3" : ""),
            c: common_vendor.t(item.title),
            d: item.id
          };
        }),
        j: common_assets._imports_4,
        k: common_assets._imports_5,
        l: common_assets._imports_6
      };
    };
  }
};
wx.createPage(_sfc_main);
