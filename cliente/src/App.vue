<template>
  <div :class="autenticado ? '' : 'bg'">
    <Navbar v-if="autenticado" />
    <transition name="animacion" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
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
  background: -webkit-linear-gradient(to right, #4a00e0, #084298);
  background: linear-gradient(to right, #084298, #4881d6);
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