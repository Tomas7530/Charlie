import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Nav from "./views/Nav.vue";
import Intro from "./views/Intro.vue";
import Creation from "./views/Creation.vue";
import Basket from "./views/Basket.vue";
import Contact from "./views/Contact.vue";
import Custom from "./views/Custom.vue";
import Email from "./views/Email.vue";

Vue.use(Router);

export default new Router({
  mode  : 'history',
  routes: [
    {
        path      : "/api/send_mail",
        name      : "email",
        components: Email
    },
    {
        path      : "/",
        name      : "home",
        components: {            
            nav  : Nav,
            title: Home
        }
    },
    {
        path     : "/intro",
        name     : "intro",
        component: Intro
    },
    {
        path     : "/creation",
        name     : "creation",
        component: Creation
    },
    {
        path     : "/basket",
        name     : "basket",
        component: Basket
    },
    {
        path     : "/contact",
        name     : "contact",
        component: Contact
    },
    {
        path     : "/custom",
        name     : "custom",
        component: Custom
    }
  ]
});
