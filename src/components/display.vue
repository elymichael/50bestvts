<template>
  <div class="card shadow rounded m-2">
    <img :src="getImage(item.id)" class="card-img-top" alt="..." />
    <div class="card-body">
      <h6 class="card-title">
        <small>{{ item.id }} - {{ item.name }}</small>
      </h6>
      <p class="card-text" v-if="showdescription">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "display",
  props: {
    item: { type: Object, required: true },
    showdescription: { type: Boolean, required: true }
  }
};
</script>
