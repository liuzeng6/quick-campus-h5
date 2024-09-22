"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
const api_index = require("./api/index.js");
const utlis_config = require("./utlis/config.js");
const stores_modules_user = require("./stores/modules/user.js");
const stores_modules_config = require("./stores/modules/config.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/ranking/index.js";
  "./pages/standard/index.js";
  "./pages/settings/index.js";
  "./pages/all/topic/index.js";
  "./pages/all/collection/index.js";
  "./pages/all/commented/index.js";
  "./pages/all/liked/index.js";
  "./pages/certify/index.js";
  "./pages/release/index.js";
  "./pages/my/index.js";
  "./pages/details/index.js";
  "./pages/find/index.js";
  "./pages/message/index.js";
  "./components/tabbar/tabbar.js";
  "./pages/profile/index.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const userStore = stores_modules_user.useUserStore();
    const baseURL = "http://localhost:3000";
    const login = () => {
      const instance = common_vendor.axios.create({
        baseURL,
        timeout: 5e3,
        adapter: common_vendor.mpAdapter
      });
      return new Promise((resolve, reject) => {
        common_vendor.index.login({
          provider: "weixin",
          onlyAuthorize: true,
          success(res) {
            instance(`/weixin/openid?code=${res.code}`).then(({ data }) => {
              if (data.code == 1) {
                resolve(data.data);
              } else {
                reject(data);
              }
            });
          },
          fail(err) {
            if (localStorage.openid) {
              resolve(localStorage.openid);
            } else {
              try {
                let input = location.search.substring(8);
                if (input) {
                  instance(`/weixin/oauth?code=${input}`).then(({ data }) => {
                    if (data.code == 1) {
                      resolve(input);
                    } else {
                      reject(err);
                    }
                  }, (err2) => {
                    reject(err2);
                  });
                } else {
                  reject(err);
                }
              } catch (e) {
                reject(e);
              }
            }
          }
        });
      });
    };
    const appData = stores_modules_config.useAppDataStore().config;
    common_vendor.onLaunch(async () => {
      console.log(common_vendor.index.getSystemInfoSync().platform);
      try {
        let token = common_vendor.index.getStorageSync("openid");
        let flag = false;
        let openid = "";
        if (token) {
          openid = token;
        } else {
          flag = true;
          openid = await login();
        }
        utlis_config.appConfig.openid = openid;
        const instance = common_vendor.axios.create({
          baseURL,
          timeout: 5e3,
          adapter: common_vendor.mpAdapter,
          headers: { "Authorization": openid }
        });
        let { data: { data } } = await instance("/user/profile");
        if (data.msg == "register") {
          common_vendor.index.setStorageSync("openid", openid);
          let { data: { data: data2 } } = await instance("/user/profile");
          userStore.userInfo.value = data2;
        } else {
          if (flag) {
            common_vendor.index.setStorageSync("openid", openid);
          }
          userStore.userInfo.value = data;
        }
      } catch (e) {
        console.log(e);
        common_vendor.index.showToast({
          icon: "none",
          title: "不支持的设备类型",
          duration: 2e3
        });
      } finally {
        let { data: { data } } = await api_index.getTags();
        appData.tags = data;
        let { data: { data: configs } } = await api_index.getConfigs();
        appData.spread = configs.spread;
        appData.qc_code = configs.qc_code;
        utlis_config.appConfig.auth = true;
      }
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(uni_modules_uviewPlus_index.uviewPlus);
  app.use(stores_index.pinai);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
