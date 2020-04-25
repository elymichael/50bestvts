<template>
  <div>
    <b-overlay :show="showoverlay" rounded="sm">
      <div class="container" v-if="detail">
        <div class="text-right">
          <a class="mr-4" href="javascript:history.go(-1)">Retornar</a>
        </div>
        <fulldisplay :item="detail" :showdescription="Boolean(true)" />
      </div>
      <template v-slot:overlay>
        <loading />
      </template>
    </b-overlay>
  </div>
</template>
<script>
import { dataconfig } from "@/services//helper.js";
import fulldisplay from "@/components/fulldisplay.vue";
import loading from "@/components/loading.vue";

export default {
  name: "player",
  data: () => ({
    data: {},
    detail: {}
  }),
  components: {
    fulldisplay,
    loading
  },
  methods: {
    init: function() {
      if (this.$route.params.id) {
        this.load(this.$route.params.id);
      }
    },
    load: async function(id) {
      this.data = await dataconfig();
      this.detail = this.data.items.find(item => item.id == id);
    }
  },
  created: async function() {
    this.init();
  }
};
</script>
