import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/plugins/bootstrap-vue";

import Layout1 from "./layouts/layout1.vue";
Vue.component("layout-1", Layout1);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
