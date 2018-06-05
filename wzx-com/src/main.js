// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import showdown from 'showdown';
import { Switch } from 'element-ui';
import { Dropdown } from 'element-ui';
import { DropdownMenu } from 'element-ui';
import { DropdownItem } from 'element-ui';
import { Button } from 'element-ui';
import { Input } from 'element-ui';
import router from '../static/js/router.js';
import store from '../static/js/store.js';
Vue.config.productionTip = false;
Vue.prototype.showdown = showdown;
Vue.prototype.axios = axios;
Vue.use(Switch);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button);
Vue.use(Input);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
  store:store
})
