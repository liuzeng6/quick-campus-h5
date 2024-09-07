"use strict";
const common_vendor = require("../../common/vendor.js");
const utlis_time = require("../../utlis/time.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_uni_icons2 + _easycom_up_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_uni_icons + Sort + CommentList + _easycom_up_popup)();
}
const Sort = () => "./Sort.js";
const CommentList = () => "./CommentList.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let mode = common_vendor.ref(1);
    let swipers = common_vendor.reactive([
      "../../static/images/banner.png"
    ]);
    let content = common_vendor.ref("");
    const topicsData = common_vendor.reactive({
      data: {}
    });
    const show = common_vendor.ref(false);
    const cList = common_vendor.reactive([]);
    topicsData.data = {
      "id": 1,
      "uid": 1,
      "title": "香山的猫猫太可爱了",
      "createtime": 1723746227,
      "content": "就在香山的猫咖，大家快来摸香山的猫猫***价格也特别亲民只要26.8老板也特别好，这几天开业，老板说前二十可以给猫猫取名字",
      "images": [],
      "is_block": false,
      "like_number": 1,
      "views": 0,
      "tag_id": "分享生活",
      "comment_number": 1,
      "eid": 0,
      "user": {
        "id": 1,
        "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
        "nickname": "用户一",
        "is_block": false
      }
    };
    topicsData.data.createtime = utlis_time.timeAgo(topicsData.data.createtime * 1e3);
    cList.push(...[
      {
        "id": 5,
        "tid": 1,
        "uid": 1,
        "read": 1,
        "content": "就是哈，这种搬个凳子还拖的人疑似绝美伪人哈，这么晚了还不知道小心一点 ，意义不明哈",
        "createtime": 232424,
        "like_number": 0,
        "is_block": false,
        "rid": 0,
        "user": {
          "id": 1,
          "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
          "nickname": "用户一",
          "is_block": false
        },
        "replies": [
          {
            "id": 6,
            "user": {
              "id": 1,
              "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
              "nickname": "用户一"
            },
            "content": "波子牛逼",
            "createtime": 1723973295,
            "like_number": 0
          },
          {
            "id": 4,
            "user": {
              "id": 2,
              "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/peach.png",
              "nickname": "用户二"
            },
            "content": "小丑降临",
            "createtime": 1723811114,
            "like_number": 0
          }
        ],
        "reply_number": 2
      },
      {
        "id": 5,
        "tid": 1,
        "uid": 1,
        "read": 1,
        "content": "是让人感到给对方",
        "createtime": 232424,
        "like_number": 0,
        "is_block": false,
        "rid": 0,
        "user": {
          "id": 1,
          "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
          "nickname": "用户一",
          "is_block": false
        },
        "replies": [
          {
            "id": 6,
            "user": {
              "id": 1,
              "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/colorball.png",
              "nickname": "用户一"
            },
            "content": "就是哈，这种搬个凳子还拖的人疑似绝美伪人哈，这么晚了还不知道小心一点",
            "createtime": 1723973295,
            "like_number": 0
          },
          {
            "id": 4,
            "user": {
              "id": 2,
              "avatar": "http://cos-cdn.xiaoqucloud.com/common/default_avatar/peach.png",
              "nickname": "用户二"
            },
            "content": "小丑降临",
            "createtime": 1723811114,
            "like_number": 0
          }
        ],
        "reply_number": 2
      }
    ]);
    const open = () => {
      show.value = true;
    };
    const close = () => {
      show.value = false;
    };
    const share = () => {
      console.log("触发分享");
    };
    const collect = () => {
      console.log("触发收藏");
    };
    const report = () => {
      console.log("触发举报");
    };
    const issue = () => {
      show.value = false;
    };
    const change = (_mode) => {
      mode.value = _mode;
    };
    return (_ctx, _cache) => {
      return {
        a: topicsData.data.user.avatar,
        b: common_vendor.t(topicsData.data.user.nickname),
        c: common_vendor.t(topicsData.data.createtime),
        d: common_vendor.p({
          type: "hand-up",
          size: "40rpx",
          color: "#919191"
        }),
        e: common_vendor.t(topicsData.data.like_number),
        f: common_vendor.t(topicsData.data.title),
        g: common_vendor.t(topicsData.data.content),
        h: common_vendor.f(topicsData.data.images, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        i: common_vendor.t(topicsData.data.tag_id),
        j: common_vendor.p({
          type: "undo",
          color: "#999999",
          size: "30rpx"
        }),
        k: common_vendor.o(share),
        l: common_vendor.p({
          type: "calendar",
          color: "#999999",
          size: "30rpx"
        }),
        m: common_vendor.o(report),
        n: common_vendor.p({
          type: "star",
          color: "#999999",
          size: "30rpx"
        }),
        o: common_vendor.o(collect),
        p: common_vendor.f(common_vendor.unref(swipers), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        q: common_vendor.t(topicsData.data.comment_number),
        r: common_vendor.o(change),
        s: common_vendor.p({
          mode: common_vendor.unref(mode)
        }),
        t: common_vendor.p({
          cList
        }),
        v: topicsData.data.user.avatar,
        w: common_vendor.o(open),
        x: common_vendor.unref(content),
        y: common_vendor.o(($event) => common_vendor.isRef(content) ? content.value = $event.detail.value : content = $event.detail.value),
        z: common_vendor.p({
          type: "checkmarkempty",
          size: "26rpx",
          color: "#fff"
        }),
        A: common_vendor.o(issue),
        B: common_vendor.o(close),
        C: common_vendor.p({
          closeOnClickOverlay: true,
          show: show.value,
          mode: "center"
        }),
        D: common_vendor.p({
          type: "compose",
          size: "34rpx",
          color: "#fff"
        }),
        E: common_vendor.p({
          type: "chatboxes",
          size: "34rpx",
          color: "#fff"
        }),
        F: common_vendor.p({
          type: "home",
          size: "34rpx",
          color: "#fff"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a45dfdea"]]);
wx.createPage(MiniProgramPage);
