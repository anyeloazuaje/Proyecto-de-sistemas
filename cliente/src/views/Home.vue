<template>
  <div class="container">
  <div class="row">
      <div class="col-md-6 mt-5">
      <h1 class="text-center">¡Hola {{ $store.getters.nombreCliente }}!</h1>
      <p class="lead text-center">
        Bienvenido al sistema de solicitud de visas. Aqui podras realizar tus
        solicitudes y verificar el estado de la misma. Ten en cuenta que solo
        puedes manter tres solicitudes activas, luego que esta ya sea aprobada o
        rechazada, podras realizar nuevas solicitudes.
      </p>
      <p class="text-muted text-center">
        Selecciona la visa de desea solicitar, estas seran revisadas por nuestro
        supervisores
      </p>
    </div>
    <div class="col-md-6 mt-5">
      <img src="/img/home.png" alt="Imagen de inicio" class="img-fluid">
    </div>
  </div>
    <div class="container my-5">
      <div class="text-left">
        <button class="btn background text-white my-3" @click="mostrarVisas = !mostrarVisas">
          {{ mostrarVisas ? "Ocultar" : "Mostrar" }} tipos de visas
          <i :class="mostrarVisas ? 'far fa-eye' : 'fas fa-eye-slash'"></i>
        </button>
      </div>
      <transition
        name="fade"
        mode="out-in"
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="row margin" v-if="mostrarVisas">
          <div class="col-md-4">
            <button
              class="btn btn-primary"
              @click="$router.push('/solicitud/visa-turista')"
            >
              Visa Turista <i class="fas fa-passport"></i>
            </button>
          </div>
          <div class="col-md-4">
            <button
              class="btn bg-empresarial text-white"
              @click="$router.push('/solicitud/visa-empresarial')"
            >
              Visa Empresarial <i class="fas fa-passport"></i>
            </button>
          </div>
          <div class="col-md-4">
            <button
              class="btn btn-info text-white"
              @click="$router.push('/solicitud/visa-diplomatica')"
            >
              Visa Diplomatica <i class="fas fa-passport"></i>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mostrarVisas: true,
    };
  },
  components: {},
  methods: {},
};
</script>
<style>
.bg-empresarial{
  background: #2778c4 !important;
}
.bg-empresarial:hover{
  background: #278ceb;
}
</style>
<style  scoped>
.margin {
  margin-top: 5em;
  text-align: center;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fadeIn {
  animation-name: fadeIn;
}
.fadeOut {
  animation-name: fadeOut;
}
.fade-in-image {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 748px) {
  button {
    margin-bottom: 1em;
  }
}
</style>
