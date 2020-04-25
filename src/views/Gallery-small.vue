<template>
  <div>
    <b-overlay :show="showoverlay" rounded="sm">
      <div class="container h-100">
        <h3 class="text-dark bg-light text-left p-3">Galería de Imágenes</h3>
        <div class="row">
          <div
            class="col-lg-2 col-md-2 col-sm-4"
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
  name: "gallerysmall",
  components: {
    display,
    loading
  }
};
</script>
