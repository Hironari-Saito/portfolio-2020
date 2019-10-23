import Vue from "vue";
import Router from "vue-router";
import Portfolio from "./pages/Portfolio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "portfolio",
      component: Portfolio
    }
    /*
    {
      path: "/work",
      name: "work",
      component: () =>
        import("./views/Work.vue")
    }
    */
  ]
});
