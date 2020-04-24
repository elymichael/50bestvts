<template>
  <div>
    <h1>Imágenes Pequeñas</h1>
    <div class="container">
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
  </div>
</template>
<script>
import display from "@/components/display.vue";

export default {
  name: "gallerysmall",
  components: {
    display
  }
};
</script>
