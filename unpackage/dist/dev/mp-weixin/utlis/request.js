"use strict";
const common_vendor = require("../common/vendor.js");
const utlis_config = require("./config.js");
const baseURL = "http://localhost:3000";
const instance = common_vendor.axios.create({
  baseURL,
  timeout: 5e3,
  adapter: common_vendor.mpAdapter
});
instance.interceptors.request.use(function(config) {
  if (utlis_config.appConfig.openid) {
    config.headers.Authorization = utlis_config.appConfig.openid;
  } else {
    console.log("没有值");
    if (!utlis_config.appConfig.auth) {
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
