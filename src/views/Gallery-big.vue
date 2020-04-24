<template>
  <div>
    <h1>Imágenes Grandes</h1>
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-12"
          v-for="x in data.items"
          :key="x.id"
        >
          <display :showdescription="Boolean(true)" :item="x" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import display from "@/components/display.vue";
export default {
  name: "gallerybig",
  components: {
    display
  }
};
</script>
