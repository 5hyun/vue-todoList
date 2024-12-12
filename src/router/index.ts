import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TodoHome from "@/components/TodoHome.vue";
import ParentComponent from "@/components/ParentComponent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: TodoHome,
  },
  {
    path: "/about",
    name: "about",
    component: ParentComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
