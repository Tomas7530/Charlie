import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Nav from "./views/Nav.vue";
import Intro from "./views/Intro.vue";
import Creation from "./views/Creation.vue";
import Order from "./views/Order.vue";
import Contact from "./views/Contact.vue";
import Custom from "./views/Custom.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        title: Home,
        nav: Nav
      }
    },
    {
      path: "/intro",
      name: "intro",
      component: Intro
    },
    {
      path: "/creation",
      name: "creation",
      component: Creation
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/custom",
      name: "custom",
      component: Custom
    }
  ]
});
