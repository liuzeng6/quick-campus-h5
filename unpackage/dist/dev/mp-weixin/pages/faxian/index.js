"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_tabbar2 = common_vendor.resolveComponent("tabbar");
  (_easycom_up_icon2 + _easycom_uni_icons2 + _easycom_tabbar2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_tabbar = () => "../../components/tabbar/tabbar2.js";
if (!Math) {
  (_easycom_up_icon + _easycom_uni_icons + _easycom_tabbar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function debounce(func, wait) {
      let timeout;
      return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          func.apply(context, args);
        }, wait);
      };
    }
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
    let searchHistory = common_vendor.reactive(["真的累", "真的累毁了", "真的累", "真的累毁了", "真的累", "真的累毁了真的累毁了真的累毁了真的累毁了真的累毁了", "真的"]);
    function handleCLick(tid) {
      common_vendor.index.navigateTo({
        url: `/pages/details/index?id=${tid}`
      });
    }
    function clear(val) {
      if (val) {
        let index = searchHistory.findIndex((el) => el == val);
        if (index != -1) {
          searchHistory.splice(index, 1);
        }
      } else {
        common_vendor.index.showModal({
          title: "提示",
          content: "是否要清空搜索记录？",
          success: function(res) {
            if (res.confirm) {
              console.log("用户点击确定");
              searchHistory.splice(0, searchHistory.length);
            }
          }
        });
      }
    }
    function close() {
      q.value = "";
    }
    let search = debounce(async () => {
      if (q.value) {
        searchHistory.unshift(q.value);
        let { data: { data } } = await api_index.getSearch(q.value);
        console.log(data);
      }
    }, 1e3);
    let q = common_vendor.ref("");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          name: "search",
          size: "40rpx"
        }),
        b: common_vendor.o([($event) => common_vendor.isRef(q) ? q.value = $event.detail.value : q = $event.detail.value, ($event) => common_vendor.unref(search)()]),
        c: common_vendor.unref(q),
        d: common_vendor.unref(q)
      }, common_vendor.unref(q) ? {
        e: common_vendor.o(($event) => close()),
        f: common_vendor.p({
          type: "close",
          size: "44rpx",
          color: "rgb(147, 146, 153)"
        })
      } : {}, {
        g: common_vendor.p({
          name: "trash",
          size: "38rpx"
        }),
        h: common_vendor.o(($event) => clear()),
        i: !common_vendor.unref(searchHistory).length
      }, !common_vendor.unref(searchHistory).length ? {} : {
        j: common_vendor.f(common_vendor.unref(searchHistory), (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.o(($event) => clear(item), item),
            c: "b644af29-3-" + i0,
            d: item
          };
        }),
        k: common_vendor.p({
          type: "closeempty",
          size: "34rpx",
          color: "#929292"
        })
      }, {
        l: common_vendor.p({
          type: "fire-filled",
          size: "36rpx",
          color: "#FF2545"
        }),
        m: common_vendor.f(common_vendor.unref(hotList), (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.n(index <= 2 ? `color${index}` : "index"),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.score),
            e: item.id,
            f: common_vendor.o(($event) => handleCLick(item.id), item.id)
          };
        }),
        n: common_vendor.p({
          checkedIndex: "1"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b644af29"]]);
wx.createPage(MiniProgramPage);
