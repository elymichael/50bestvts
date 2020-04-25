<template>
  <div id="app">
    <div class="fixed-top">
      <h2 class="bg-orange p-4 text-white">
        “Don Virgilio y sus 50 Traviesos”
      </h2>
    </div>
    <div id="nav">
      <router-link to="/">Portada</router-link> |
      <span>Seleccione vista deseada para ver el album: </span>
      <router-link to="/small">Compactas</router-link> |
      <router-link to="/medium">Mediana</router-link> |
      <router-link to="/big">Grande</router-link>
    </div>
    <router-view />
    <div class="p-2">
      <hr />
      <p class="text-muted">
        <small>
          Selección de los 50 mejores judadores del baloncesto del distrito
          nacional. Realizado por el equipo de <mark>Cancha Entera</mark> y el
          <mark>Listín diario</mark>. Especial Cuarentena COVID-19.
          <span class="badge badge-secondary">Año 2020.</span>
        </small>
      </p>
    </div>
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
@media screen and (min-width: 601px) {
  #nav {
    margin-top: 90px;
  }
}

@media screen and (max-width: 600px) {
  #nav {
    margin-top: 125px;
  }
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff4546;
}
.card .card-body a {
  text-decoration: none;
}
.bg-orange {
  background-color: #ff4546;
}

.text-orange {
  color: #ff4546;
}
</style>
