"use strict";
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_user = require("../stores/modules/user.js");
const userStore = stores_modules_user.useUserStore();
const baseURL = "http://localhost:3000/";
const instance = common_vendor.axios.create({
  baseURL,
  timeout: 5e3,
  adapter: common_vendor.mpAdapter,
  headers: { "Authorization": userStore.Authorization }
});
common_vendor.axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return Promise.reject(error);
});
common_vendor.axios.interceptors.response.use(function(res) {
  return res;
}, function(error) {
  return Promise.reject(error);
});
exports.instance = instance;
