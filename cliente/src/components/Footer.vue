<template>
  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; {{ anioActual }} {{ titulo }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    titulo: {
      type: String,
      default: "Solicitud de visa",
    },
  },
  computed: {
    anioActual() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>