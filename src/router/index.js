import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home.vue";
import Profile from "@/pages/profile.vue";
import About from "@/pages/about.vue";
import Projects from "@/pages/projects.vue";

//Errors
import E404 from "@/pages/errors/E404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: 2
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: 3
    },
    component: About
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "*",
    name: "404",
    component: E404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
