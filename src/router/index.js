import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home.vue";
import Profile from "@/pages/profile.vue";
import TA from "@/pages/tugasakhir.vue";
import GeoKom from "@/pages/geokom.vue";

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
    component: Profile
  },
  {
    path: "/ta",
    name: "Tugas Akhir",
    meta: {
      layout: 1
    },
    component: TA
  },
  {
    path: "/geokom",
    name: "Geologi Komputasi",
    meta: {
      layout: 1
    },
    component: GeoKom
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
