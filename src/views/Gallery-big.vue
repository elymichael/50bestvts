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
export default {
  name: "gallerybig"
};
</script>
