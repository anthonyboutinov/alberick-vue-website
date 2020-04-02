import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import DirectusSDK from "@directus/sdk-js";
import AxiosDatabase from './AxiosDatabase.js';

Vue.config.productionTip = false



const databaseParams = {

  // Directus:
  // url: "http://localhost:8888/",
  // project: "alberick",
  // storage: window.localStorage

  // Wordpress:
  url: "http://192.168.0.109:8888/wp-json/wp/v2/",

};

Object.defineProperties(Vue.prototype, {
  $database: {
    // value: new DirectusSDK(databaseParams)
    value: new AxiosDatabase(databaseParams)
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
