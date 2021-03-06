import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import filters from "./filters";

Vue.config.productionTip = false;

Vue.mixin({
  filters
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
