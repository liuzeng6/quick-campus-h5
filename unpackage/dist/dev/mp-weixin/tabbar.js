"use strict";
const common_vendor = require("./common/vendor.js");
const api_index = require("./api/index.js");
if (!Array) {
  const _component_uni_icon = common_vendor.resolveComponent("uni-icon");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_component_uni_icon + _easycom_up_popup2)();
}
const _easycom_up_popup = () => "./uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  _easycom_up_popup();
}
const _sfc_main = {
  __name: "tabbar",
  props: {
    checkedIndex: {
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const show = common_vendor.ref(false);
    const tags = common_vendor.ref([]);
    const barList = common_vendor.ref([
      { text: "校园", src: "../../static/tabbar/shcool.png", active: "../../static/tabbar/shcool_active.png", href: "/pages/home/index" },
      { text: "发现", src: "../../static/tabbar/faxian.png", active: "../../static/tabbar/faxian_active.png", href: "/pages/find/index" },
      { src: "../../static/tabbar/fabu.png" },
      { text: "消息", src: "../../static/tabbar/msg.png", active: "../../static/tabbar/msg-active.png", href: "/pages/message/index" },
      { text: "我的", src: "../../static/tabbar/user.png", active: "../../static/tabbar/user-active.png", href: "/pages/my/index" }
    ]);
    common_vendor.onMounted(() => {
      getTagList();
    });
    const toRelease = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/release/index?mode=${id}`
      });
    };
    const getTagList = async () => {
      try {
        const { data: { data: res } } = await api_index.getTags();
        tags.value = res.filter((el) => el.enable);
      } catch (e) {
        console.log("错误", e);
      }
    };
    const checkedBar = (index) => {
      if (index === 2) {
        show.value = true;
      } else {
        common_vendor.index.switchTab({
          url: barList.value[index].href
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(barList.value, (item, index, i0) => {
          return common_vendor.e({
            a: index == props.checkedIndex ? item.active : item.src,
            b: common_vendor.n(item.src.includes("fabu") ? "item-img fabu" : "item-img"),
            c: !item.src.includes("fabu")
          }, !item.src.includes("fabu") ? {
            d: common_vendor.t(item.text),
            e: common_vendor.n(__props.checkedIndex == index ? "item-text-active text" : "text")
          } : {}, {
            f: common_vendor.o(($event) => checkedBar(index), item.src),
            g: item.src
          });
        }),
        b: common_vendor.f(tags.value, (item, k0, i0) => {
          return {
            a: "e9b92a61-1-" + i0 + ",e9b92a61-0",
            b: common_vendor.t(item.tag),
            c: item.id,
            d: common_vendor.o(($event) => toRelease(item.id), item.id)
          };
        }),
        c: common_vendor.p({
          name: "bookmark"
        }),
        d: common_vendor.o(($event) => show.value = false),
        e: common_vendor.p({
          show: show.value,
          mode: "bottom"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e9b92a61"]]);
exports.MiniProgramPage = MiniProgramPage;
