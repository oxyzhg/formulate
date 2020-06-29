import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Formulate from '@formulate';

import App from './App.vue';

Vue.use(ElementUI);
Vue.use(Formulate);

new Vue({
  render: h => h(App),
}).$mount('#root');
