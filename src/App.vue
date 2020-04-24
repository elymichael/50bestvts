<template>
  <div id="app">
    <div id="nav">
      <router-link to="/small">Gallería - Imágenes Pequeñas</router-link> |
      <router-link to="/medium">Gallery - Imágenes Normales</router-link> |
      <router-link to="/big">Gallery - Imágenes Grandes</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
