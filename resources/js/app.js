import Vue from 'vue';

import App from './App';
import store from './store';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(BootstrapVue);
Vue.use(FlashMessage);

new Vue({
    el: '#app',
    store,
    router,
    render: h =>h(App)
});
