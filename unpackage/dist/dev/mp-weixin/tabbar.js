"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  __name: "tabbar",
  props: {
    checkedIndex: {
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const barList = common_vendor.ref([
      { text: "校园", src: "../../static/tabbar/shcool.png", active: "../../static/tabbar/shcool_active.png", href: "/pages/index/index" },
      { text: "发现", src: "../../static/tabbar/faxian.png", active: "../../static/tabbar/faxian_active.png", href: "/pages/faxian/index" },
      { src: "../../static/tabbar/fabu.png" },
      { text: "消息", src: "../../static/tabbar/msg.png", active: "../../static/tabbar/msg-active.png", href: "/pages/message/index" },
      { text: "我的", src: "../../static/tabbar/user.png", active: "../../static/tabbar/user-active.png", href: "/pages/user/index" }
    ]);
    const checkedBar = (index) => {
      common_vendor.index.navigateTo({
        url: barList.value[index].href + `?index=${index}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(barList.value, (item, index, i0) => {
          return common_vendor.e({
            a: index == props.checkedIndex ? item.active : item.src,
            b: common_vendor.n(item.src.includes("fabu") ? "item-img fabu" : "item-img"),
            c: !item.src.includes("fabu")
          }, !item.src.includes("fabu") ? {
            d: common_vendor.t(item.text)
          } : {}, {
            e: common_vendor.o(($event) => checkedBar(index), item.src),
            f: item.src
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/xueXi/Uniapp/school/components/tabbar/tabbar.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
