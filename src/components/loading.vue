<template>
  <div class="text-center m-5">
    <p id="cancel-label">Por favor, espere...</p>
    <div class="spinner-border text-danger" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading"
};
</script>
