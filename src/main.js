import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
/* Bootstrap */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { dataconfig } from "@/services//helper.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.mixin({
  data: () => ({
    info: {
      lastupdated: "24 de abril del 2020, 08:00 p.m.",
      source: "Cancha Entera, 2020."
    },
    data: {},
    showoverlay: false
  }),
  methods: {
    load: async function() {
      this.showoverlay = true;
      this.data = await dataconfig();
      this.showoverlay = false;
    },
    getImage: function(id) {
      return "img/" + id + ".jpg";
    }
  },
  created: async function() {
    this.load();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
