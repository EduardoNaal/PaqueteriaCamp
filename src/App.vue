<template>
  <div id="app">
    <!-- Encierra tu contenido principal dentro del router-view -->
     <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script setup>
// Aquí puedes agregar configuraciones globales o importar estilos si es necesario.
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue';
</script>

<style>
/* Estilo global opcional para toda la aplicación */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
