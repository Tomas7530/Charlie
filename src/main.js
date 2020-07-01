import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from './store';
import $ from 'jquery';

Vue.use(Vuex);

Vue.config.productionTip = false;

window.vue = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
