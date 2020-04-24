import Vue from "vue";
import VueRouter from "vue-router";
import GalleryBig from "../views/Gallery-big.vue";
import GalleryMedium from "../views/Gallery-medium.vue";
import GallerySmall from "../views/Gallery-small.vue";
import Player from "../views/Player.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: GalleryBig
  },
  {
    path: "/big",
    name: "Big",
    component: GalleryBig
  },
  {
    path: "/medium",
    name: "Medium",
    component: GalleryMedium
  },
  {
    path: "/small",
    name: "Small",
    component: GallerySmall
  },
  {
    path: "/player/:id",
    name: "Player",
    component: Player
  }
];

const router = new VueRouter({
  routes
});

export default router;
