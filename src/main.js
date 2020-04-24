import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
/* Bootstrap */
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { dataconfig } from "@/services//helper.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.mixin({
  data: () => ({
    data: []
  }),
  methods: {
    load: async function() {
      this.data = await dataconfig();
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
