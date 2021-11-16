<template>
  <div class="alert alert-danger-text-center">
    <h4>
      <p class="mt-4">
        <i class="fas fa-exclamation-triangle"></i>
        <b
          >Por favor, corrija
          {{
            erroresFormulario.length > 1
              ? "los siguientes errores"
              : "el siguientes error"
          }}:</b
        >
      </p>
    </h4>
    <ul>
      <li class="none-list" v-for="error in erroresFormulario" :key="error">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AlertaErrores",
  props: {
    erroresFormulario: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>