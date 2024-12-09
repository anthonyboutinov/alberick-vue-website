import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AxiosDatabase from "@/services/AxiosDatabase.js";

Vue.config.productionTip = false;

Object.defineProperties(Vue.prototype, {
  $database: {
    value: new AxiosDatabase({
      // Wordpress:
      // url: (process.env.NODE_ENV === 'development' ? "https://alberick.nl" /*"http://192.168.0.109:8888"*/ : '') + "/wp-json/wp/v2/",
      url: "https://alberick.nl/wp-json/wp/v2/",
    }),
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
