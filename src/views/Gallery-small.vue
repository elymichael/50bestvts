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
          <div class="card shadow rounded">
            <img :src="getImage(x.id)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">
                <small>{{ x.id }} - {{ x.name }}</small>
              </h6>
              <!-- <p class="card-text">
                {{ x.description }}
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dataconfig } from "@/services/helper";
export default {
  name: "gallerysmall",
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
};
</script>
