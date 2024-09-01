"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  _easycom_tabbar2();
}
const _easycom_tabbar = () => "../../components/tabbar/tabbar2.js";
if (!Math) {
  _easycom_tabbar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let hotList = common_vendor.reactive([
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      },
      {
        "id": 1,
        "tid": 5,
        "title": "啊哈哈哈",
        "score": 6789
      }
    ]);
    function handleCLick(id) {
      console.log(id);
    }
    function clear(id) {
      if (id) {
        console.log(`清除${id}`);
      } else {
        console.log("需要清除全部");
      }
    }
    let q = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.unref(q),
        c: common_vendor.o(($event) => common_vendor.isRef(q) ? q.value = $event.detail.value : q = $event.detail.value),
        d: common_vendor.o(($event) => clear()),
        e: common_vendor.f(common_vendor.unref(hotList), (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.n(index <= 2 ? `color${index}` : "index"),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.score),
            e: item.id,
            f: common_vendor.o(($event) => handleCLick(item.id), item.id)
          };
        }),
        f: common_vendor.p({
          checkedIndex: "1"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b644af29"]]);
wx.createPage(MiniProgramPage);
