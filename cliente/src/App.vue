<template>
  <div :class="autenticado ? '' : 'bg'">
    <Navbar v-if="autenticado" />
    <transition name="animacion" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
/* 
  TODO: [ ] Agregar funcionalidad y ruta para crear visa turista
    TODO: [X] AGREGAR RUTA /visa-turista
    TODO: [X] AGREGAR estilos y formulario
    TODO: [X] ENVIAR API
    TODO: [X] AGREGAR TRANSICION
  TODO: [ x] Agregar funcionalidad y ruta para crear visa empresarial
  TODO: [x ] Agregar funcionalidad y ruta para crear visa diplomatica
  TODO: [ x] Agregar funcionalidad y ruta para notificacion
  TODO: [ X] Agregadar validacion para evitar agregar mas solicitudes si ya existe una pendiente
  TODO: [] CAMBIAR BIENVENIDO EN HOME
  TODO: [] Aquitar iconos de visa
  TODO: [] Agregar otro color al navbar
  

*/

import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch("getCliente");
  },
  computed: {
    autenticado() {
      return this.$store.state.isLogged;
    },
  },
};
</script>

<style>
.bg {
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  min-height: 100vh;
}
</style>
<style scoped>
.animacion-enter-active,
.animacion-leave-active {
  transition: opacity 0.5s;
}
.animacion-enter,
.animacion-leave-to {
  opacity: 0;
}
</style>