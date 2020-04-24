<template>
  <div>
    <div class="container" v-if="detail">
      <fulldisplay :item="detail" :showdescription="Boolean(true)" />
    </div>
  </div>
</template>
<script>
import { dataconfig } from "@/services//helper.js";
import fulldisplay from "@/components/fulldisplay.vue";

export default {
  name: "player",
  data: () => ({
    data: {},
    detail: {}
  }),
  components: {
    fulldisplay
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
