import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DirectusSDK from "@directus/sdk-js";

Vue.config.productionTip = false

Object.defineProperties(Vue.prototype, {
  $database: {
    value: new DirectusSDK({
      url: "http://localhost:8888/",
      project: "alberick",
      storage: window.localStorage
    })
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import DirectusSDK from "@directus/sdk-js";
//
// const client = new DirectusSDK({
//   url: "http://localhost:8888/",
//   project: "alberick",
//   storage: window.localStorage
// });
