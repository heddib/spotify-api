<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/">Accueil</router-link>
      <router-link to="/search">Parcourir</router-link>
      <router-link to="/favorites">Favoris</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("./assets/css/style.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 70px; /* Add a top margin to avoid content overlay */
}

body {
  background-color: #191414;
}
</style>
