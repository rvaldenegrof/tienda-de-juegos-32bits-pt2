import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: () => import("./pages/404.vue"),
    },
    {
      path: "/",
      name: "inicio",
      component: () => import("./pages/Inicio.vue"),
    },
    {
      path: "/busquedas",
      name: "Busquedas",
      component: () => import("./pages/Busquedas.vue"),
    },
    {
      path: "/ventas",
      name: "Ventas",
      component: () => import("./pages/Ventas.vue"),
    },
    {
      path: "/total",
      name: "Total",
      component: () => import("./pages/Total.vue"),
    },
  ],
});
