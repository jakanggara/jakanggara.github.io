import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/plugins/bootstrap-vue";
import "@/plugins/font-awesome";

import Layout1 from "./layouts/layout1.vue";
import Layout2 from "./layouts/layout2.vue";
import Layout3 from "./layouts/layout3.vue";
Vue.component("layout-1", Layout1);
Vue.component("layout-2", Layout2);
Vue.component("layout-3", Layout3);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
