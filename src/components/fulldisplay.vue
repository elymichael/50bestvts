<template>
  <div class="card m-4 border-0">
    <div class="row no-gutters">
      <div class="col-md-6">
        <div class="shadow rounded m-2 border-0">
          <img :src="getImage(item.id)" class="card-img" alt="..." />
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-body text-left">
          <h5 class="card-title text-secondary">
            <strong>{{ item.id }} - {{ item.name }}</strong>
          </h5>
          <p class="card-text">{{ item.description }}</p>
          <h6><b>Información de Bono:</b></h6>
          <p class="card-text">
            <span class="text-muted">{{ item.bonus }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fulldisplay",
  props: {
    item: { type: Object, required: true },
    showdescription: { type: Boolean, required: true }
  }
};
</script>
