<template>
  <div>
    <b-overlay :show="showoverlay" rounded="sm">
      <div class="container">
        <h3 class="text-orange bg-light text-left p-3">Galería de Imágenes</h3>
        <div class="row">
          <div
            class="col-lg-3 col-md-3 col-sm-6"
            v-for="x in data.items"
            :key="x.id"
          >
            <display :showdescription="Boolean(false)" :item="x" />
          </div>
        </div>
      </div>
      <template v-slot:overlay>
        <loading />
      </template>
    </b-overlay>
  </div>
</template>
<script>
import display from "@/components/display.vue";
import loading from "@/components/loading.vue";

export default {
  name: "gallerynormal",
  components: {
    display,
    loading
  }
};
</script>
