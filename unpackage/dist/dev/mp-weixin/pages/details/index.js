"use strict";
const common_vendor = require("../../common/vendor.js");
const utlis_time = require("../../utlis/time.js");
const utlis_request = require("../../utlis/request.js");
const stores_appData = require("../../stores/appData.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_botton = common_vendor.resolveComponent("botton");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_uni_icons2 + _component_botton + _easycom_up_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_uni_icons + common_vendor.unref(PictureList) + Sort + CommentList + _easycom_up_popup)();
}
const Sort = () => "./Sort.js";
const CommentList = () => "./CommentList.js";
const PictureList = () => "../../components/pictureList/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const like = async (flag) => {
      let tid = topicsData.value.id;
      if (flag) {
        let { data } = await utlis_request.instance.delete(`/community/like/topics/${tid}`);
        if ((data == null ? void 0 : data.code) == 1) {
          common_vendor.index.showToast({
            title: data.data,
            duration: 2e3
          });
          topicsData.value.is_like = !topicsData.value.is_like;
          topicsData.value.like_number = topicsData.value.like_number - 1;
        } else {
          common_vendor.index.showToast({
            title: data.msg,
            duration: 2e3
          });
        }
      } else {
        let { data } = await utlis_request.instance.post(`/community/like/topics/${tid}`);
        if ((data == null ? void 0 : data.code) == 1) {
          common_vendor.index.showToast({
            title: data.data,
            duration: 2e3
          });
          topicsData.value.is_like = !topicsData.value.is_like;
          topicsData.value.like_number = topicsData.value.like_number + 1;
        } else {
          common_vendor.index.showToast({
            title: data.msg,
            duration: 2e3
          });
        }
      }
    };
    const skip = (url) => {
      location = url;
    };
    const mode = common_vendor.ref(1);
    const images = common_vendor.ref([]);
    const spread = common_vendor.ref([]);
    let id = 0;
    const navigator = (url, type) => {
      if (type) {
        common_vendor.index.switchTab({
          url
        });
      } else {
        common_vendor.index.navigateTo({
          url
        });
      }
    };
    const getCommentData = async (mode2 = 1) => {
      let { data } = await utlis_request.instance(`/community/topics/comments/${id}?sort=${mode2}`);
      if (data.code == 1) {
        cList.value = data.data;
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: data.msg,
          duration: 2e3
        });
        cList.value = [];
      }
    };
    const loadData = async () => {
      let { data: { data } } = await utlis_request.instance(`/community/topics/${id}`);
      topicsData.value = data;
      images.value = data.images;
      spread.value = stores_appData.appData.spread;
    };
    common_vendor.onLoad(async (options) => {
      try {
        common_vendor.index.showShareMenu({
          withShareTicket: true,
          menus: ["shareAppMessage", "shareTimeline"]
        });
      } catch (e) {
        console.log("不支持分享");
      }
      id = options.id;
      loadData();
      getCommentData(1);
    });
    common_vendor.onPullDownRefresh(async () => {
      loadData();
      getCommentData(1);
    });
    let content = common_vendor.ref("");
    const topicsData = common_vendor.ref({
      "id": 1,
      "uid": 1,
      "title": "",
      "createtime": 1723746227,
      "content": "",
      "images": [],
      "is_block": false,
      "like_number": 0,
      "is_like": 0,
      "is_collect": 0,
      "views": 0,
      "tag_id": 1,
      "comment_number": 0,
      "eid": 0,
      "user": {
        "id": 1,
        "avatar": "",
        "nickname": "",
        "is_block": false
      }
    });
    const show = common_vendor.ref(false);
    const cList = common_vendor.ref([]);
    const commentData = common_vendor.ref({});
    const open = (opt) => {
      commentData.value = {
        "comment_id": opt.comment_id || 0,
        "content": "",
        "topic_id": topicsData.value.id,
        "ruid": opt.ruid || 0,
        "type": 1
      };
      content.value = "";
      show.value = true;
    };
    const close = () => {
      show.value = false;
    };
    const share = () => {
      common_vendor.index.setClipboardData({ data: location.href });
      console.log("触发分享");
    };
    const collect = async (flag) => {
      let tid = topicsData.value.id;
      if (flag) {
        let { data } = await utlis_request.instance.delete(`/community/my/collect/topics/${tid}`);
        if ((data == null ? void 0 : data.code) == 1) {
          common_vendor.index.showToast({
            title: data.data,
            duration: 2e3
          });
          topicsData.value.is_collect = !topicsData.value.is_collect;
        } else {
          console.log("失败");
        }
      } else {
        let { data } = await utlis_request.instance.post(`/community/collect/topics/${tid}`);
        if ((data == null ? void 0 : data.code) == 1) {
          common_vendor.index.showToast({
            title: data.data,
            duration: 2e3
          });
          topicsData.value.is_collect = !topicsData.value.is_collect;
        } else {
          console.log("失败");
        }
      }
    };
    const report = async () => {
      let res = await common_vendor.index.showModal({
        title: "提示",
        content: "是否要举报该帖子"
      });
      if (res.confirm) {
        let phone_number = prompt("请填写手机号，方便管理员核实");
        if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone_number)) {
          let { data } = await utlis_request.instance.post(`/community/report/${topicsData.value.id}`, {
            "remark": `快捷举报联系方式:${phone_number}`,
            "reported_type": 1
          });
          if (data.code == 1) {
            common_vendor.index.showToast({
              icon: "none",
              title: "举报成功，请留意电话",
              duration: 2e3
            });
          } else {
            common_vendor.index.showToast({
              icon: "none",
              title: data.msg,
              duration: 2e3
            });
          }
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: "手机号验证失败",
            duration: 2e3
          });
        }
      } else if (res.cancel) {
        console.log("用户点击取消");
      }
      console.log("触发举报");
    };
    let error = common_vendor.ref("");
    let timer = null;
    const reply = async () => {
      if (content.value == "") {
        error.value = "不能发送空评论";
        clearTimeout(timer);
        setTimeout(() => {
          error.value = "";
        }, 2e3);
      } else {
        commentData.value.content = content.value;
        let { data } = await utlis_request.instance.post(`/community/replies`, common_vendor.toRaw(commentData.value));
        if (data.code == 1) {
          content.value = "";
          show.value = false;
          common_vendor.index.showToast({
            title: "发表评论成功",
            duration: 2e3,
            icon: "none"
          });
          console.log(mode.value);
          await getCommentData(mode.value);
        } else {
          common_vendor.index.showToast({
            title: "发布失败",
            duration: 2e3,
            icon: "none"
          });
        }
      }
    };
    const change = async (_mode) => {
      mode.value = _mode;
      await getCommentData(_mode);
    };
    return (_ctx, _cache) => {
      var _a;
      return {
        a: topicsData.value.user.avatar,
        b: common_vendor.t(topicsData.value.user.nickname),
        c: common_vendor.t(common_vendor.unref(utlis_time.timeAgo)(topicsData.value.createtime * 1e3)),
        d: common_vendor.p({
          type: "hand-up",
          size: "40rpx",
          color: "#919191"
        }),
        e: common_vendor.t(topicsData.value.like_number),
        f: topicsData.value.like_number,
        g: common_vendor.n(topicsData.value.is_like ? "like active" : "like"),
        h: common_vendor.o(($event) => like(topicsData.value.is_like)),
        i: common_vendor.t(topicsData.value.title),
        j: common_vendor.t(topicsData.value.content),
        k: common_vendor.p({
          images: images.value
        }),
        l: common_vendor.t((_a = common_vendor.unref(stores_appData.appData).tags.find((item) => item.id == topicsData.value.tag_id)) == null ? void 0 : _a.tag),
        m: common_vendor.p({
          type: "undo",
          color: "#999999",
          size: "30rpx"
        }),
        n: common_vendor.o(share),
        o: common_vendor.p({
          ["open-type"]: "share"
        }),
        p: common_vendor.p({
          type: "calendar",
          color: "#999999",
          size: "30rpx"
        }),
        q: common_vendor.o(report),
        r: common_vendor.p({
          type: "star",
          color: "#999999",
          size: "30rpx"
        }),
        s: common_vendor.t(topicsData.value.is_collect ? "取消" : "收藏"),
        t: common_vendor.o(($event) => collect(topicsData.value.is_collect)),
        v: common_vendor.n(topicsData.value.is_collect ? "collect active" : "collect"),
        w: common_vendor.f(spread.value, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => skip(item.url))
          };
        }),
        x: common_vendor.t(topicsData.value.comment_number),
        y: common_vendor.o(change),
        z: common_vendor.p({
          mode: mode.value
        }),
        A: common_vendor.o(open),
        B: common_vendor.p({
          cList: cList.value,
          tid: topicsData.value.id
        }),
        C: topicsData.value.user.avatar,
        D: common_vendor.o(($event) => open({
          ruid: 0
        })),
        E: common_vendor.t(common_vendor.unref(error)),
        F: common_vendor.unref(content),
        G: common_vendor.o(($event) => common_vendor.isRef(content) ? content.value = $event.detail.value : content = $event.detail.value),
        H: common_vendor.p({
          type: "checkmarkempty",
          size: "26rpx",
          color: "#fff"
        }),
        I: common_vendor.o(reply),
        J: common_vendor.o(close),
        K: common_vendor.p({
          closeOnClickOverlay: true,
          show: show.value,
          mode: "center"
        }),
        L: common_vendor.p({
          type: "compose",
          size: "34rpx",
          color: "#fff"
        }),
        M: common_vendor.o(($event) => navigator("/pages/release/index")),
        N: common_vendor.p({
          type: "chatboxes",
          size: "34rpx",
          color: "#fff"
        }),
        O: common_vendor.o(($event) => navigator("/pages/message/index", 1)),
        P: common_vendor.p({
          type: "home",
          size: "34rpx",
          color: "#fff"
        }),
        Q: common_vendor.o(($event) => navigator("/pages/home/index", 1))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a45dfdea"]]);
wx.createPage(MiniProgramPage);
