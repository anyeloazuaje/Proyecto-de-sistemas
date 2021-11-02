<template>
  <div :class="usuarioLogueado ? 'body-login' : 'body'">
    <Navbar v-if="usuarioLogueado" />
    <transition name="animacion" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name:"App",
  components:{
    Navbar
  },
  created() {
    this.$store.dispatch("getUsuario");
  },
  computed: {
    usuarioLogueado() {
      return this.$store.state.isLogged;
    },
  },

}
</script>
<style>
.body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
  height: 43.4em;
}
.body-login{
  background: #eee;
  height: 55em;
  font-family: sans-serif;
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