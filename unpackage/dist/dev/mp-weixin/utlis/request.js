"use strict";
const common_vendor = require("../common/vendor.js");
const stores_appData = require("../stores/appData.js");
const baseURL = "http://localhost:3000";
const instance = common_vendor.axios.create({
  baseURL,
  timeout: 5e3,
  adapter: common_vendor.mpAdapter
});
instance.interceptors.request.use(function(config) {
  if (stores_appData.appData.openid) {
    config.headers.Authorization = stores_appData.appData.openid;
  } else {
    console.log("没有值");
    if (!stores_appData.appData.auth) {
      config.headers.Authorization = "OoPvL6mSXGJ7crsbcYCPBTDI91dK86IN";
    }
  }
  return config;
}, function(error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function(res) {
  return res;
}, function(error) {
  return Promise.reject(error);
});
exports.baseURL = baseURL;
exports.instance = instance;
