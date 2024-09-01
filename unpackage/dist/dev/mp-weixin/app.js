"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
require("./stores/modules/user.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/user/index.js";
  "./pages/faxian/index.js";
  "./pages/message/index.js";
  "./components/tabbar/tabbar.js";
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
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/xueXi/Uniapp/quick-campus-h5/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(stores_index.pinai);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
