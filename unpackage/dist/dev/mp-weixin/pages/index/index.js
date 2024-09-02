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
    let tagId = common_vendor.ref("");
    let hotTopicList = common_vendor.ref([]);
    let tags = common_vendor.ref([]);
    let topicList = common_vendor.ref([]);
    let pageInfo = common_vendor.reactive({
      page: 1,
      pageSize: 10
    });
    common_vendor.onMounted(() => {
      getHotTopics();
      getTagAll();
      getTopice(pageInfo, tagId.value);
    });
    const getStatusHeight = (navBarHeight) => {
      barHeight.value = navBarHeight;
    };
    const getHotTopics = async () => {
      let res = await api_index.getTopics();
      hotTopicList.value = res.data.data;
    };
    const getTagAll = async () => {
      let res = await api_index.getTags();
      tags.value = res.data.data;
    };
    const getTopiceAllByTag = () => {
      tagId.value = "";
      getTopice(pageInfo, tagId.value);
    };
    const getTopiceByTag = (id) => {
      tagId.value = id;
      getTopice(pageInfo, tagId.value);
    };
    const getTopice = async (pageInfo2, tagId2) => {
      let res = await api_index.getTopiceAll(pageInfo2, tagId2);
      topicList.value = res.data.data;
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
        i: common_vendor.f(common_vendor.unref(hotTopicList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.n(item.id <= 3 ? "top3 no" : "no"),
            c: common_vendor.t(item.title),
            d: item.id
          };
        }),
        j: common_vendor.n(!common_vendor.unref(tagId) ? "color-active" : ""),
        k: common_vendor.o(getTopiceAllByTag),
        l: common_vendor.f(common_vendor.unref(tags), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.tag),
            b: item.id,
            c: common_vendor.n(common_vendor.unref(tagId) === item.id ? "color-active" : ""),
            d: common_vendor.o(($event) => getTopiceByTag(item.id), item.id)
          };
        }),
        m: common_vendor.f(common_vendor.unref(topicList), (item, k0, i0) => {
          return {
            a: item.user.avatar,
            b: common_vendor.t(item.user.nickname),
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.tag),
            e: common_vendor.t(item.comment_number),
            f: common_vendor.t(item.like_number),
            g: item.id
          };
        }),
        n: common_assets._imports_4,
        o: common_assets._imports_5
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
