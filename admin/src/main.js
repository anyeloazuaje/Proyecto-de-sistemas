import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ENDPOINT, AUTENTICACION_TOKEN_ADMIN } from '@/base/main';
Vue.config.productionTip = false;

axios.defaults.baseURL = ENDPOINT;
const token = localStorage.getItem(AUTENTICACION_TOKEN_ADMIN);
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
} else {
  delete axios.defaults.headers.common['Authorization'];
}

Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
