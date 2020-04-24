<template>
  <div>
    <h1>Imágenes Normales</h1>
    <div class="container">
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
  </div>
</template>
<script>
import display from "@/components/display.vue";

export default {
  name: "gallerynormal",
  components: {
    display
  }
};
</script>
