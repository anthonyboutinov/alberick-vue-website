import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AxiosDatabase from './AxiosDatabase.js';

Vue.config.productionTip = false

const databaseParams = {
  // Wordpress:
  url: (process.env.NODE_ENV === 'development' ? "https://alberick.nl" /*"http://192.168.0.109:8888"*/ : '') + "/wp-json/wp/v2/",
};

Object.defineProperties(Vue.prototype, {
  $database: {
    value: new AxiosDatabase(databaseParams)
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
