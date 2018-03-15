// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Axios from 'axios';
import ElementUI from 'element-ui';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery' 

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(MintUI);
Vue.prototype.$axios=Axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
