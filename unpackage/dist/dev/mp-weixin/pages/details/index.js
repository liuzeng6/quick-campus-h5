"use strict";
const common_vendor = require("../../common/vendor.js");
const utlis_request = require("../../utlis/request.js");
const _sfc_main = {
  __name: "index",
  async setup(__props) {
    let __temp, __restore;
    const route = common_vendor.useRoute();
    const topicsData = common_vendor.reactive({
      data: {}
    });
    let { id } = route.query;
    let { data } = ([__temp, __restore] = common_vendor.withAsyncContext(() => utlis_request.instance.get(`/community/topics/${id}`)), __temp = await __temp, __restore(), __temp);
    topicsData.data = data.data;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(topicsData)
      };
    };
  }
};
wx.createPage(_sfc_main);
