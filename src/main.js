// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview';
import  './mock/screen/screen';
import  './mock/userinfo/student';
import  './mock/userinfo/teacher';
import 'iview/dist/styles/iview.css';
import './common/css/reset.css';
import './common/font/iconfont.css';
import store from './store';
Vue.config.productionTip = false;
Vue.use(iview);
/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
