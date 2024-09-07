"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
if (!Math) {
  "./pages/index/index.js";
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
  "./pages/search/index.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
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
