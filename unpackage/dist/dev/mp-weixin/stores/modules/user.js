"use strict";
const common_vendor = require("../../common/vendor.js");
const useUserStore = common_vendor.defineStore("userStore", () => {
  const Authorization = "OoPvL6mSXGJ7crsbcYCPBTDI91dK86IN";
  return {
    Authorization
  };
}, {
  // 设置持久化
  persist: true
});
exports.useUserStore = useUserStore;
