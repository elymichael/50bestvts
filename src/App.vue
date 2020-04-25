<template>
  <div id="app">
    <div class="fixed-top">
      <h2 class="bg-info p-4 text-white">
        Los 50 Traviesos del Virgilio Travieso Soto
      </h2>
    </div>
    <div id="nav">
      <span><strong>Seleccione Vista: </strong></span>
      <router-link to="/small">Compactas</router-link> |
      <router-link to="/medium">Normal</router-link> |
      <router-link to="/big">Grande</router-link>
    </div>
    <div class="p-2">
      <p class="text-muted">
        <small>
          Selección de los 50 mejores judadores del baloncesto del distrito
          nacional. Realizado por el equipo de <mark>Cancha Entera</mark> y el
          <mark>Listín diario</mark>. Especial Cuarentena COVID-19.
          <span class="badge badge-secondary">Año 2020.</span>
        </small>
      </p>
      <hr />
    </div>
    <router-view />
    <div class="fixed-bottom">
      <small class="text-muted"
        >Diseñada por Ely Michael Núñez @2020 Sitcs, EIRL.</small
      >
    </div>
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
  margin-top: 90px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.card .card-body a {
  text-decoration: none;
}
</style>
