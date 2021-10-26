<template>
  <div class="container">
    <div class="col-md-12 mt-5">
      <h1>Hola {{ $store.getters.nombreCliente }}</h1>
      <p class="lead text-center">
        Bienvenido al sistema de solicitud de visas. Aqui podras realizar tus
        solicitudes y verificar el estado de la misma. Ten en cuenta que solo
        puedes manter una solictud activa, luego que esta ya sea aprobada o
        rechazada, podras realizar nuevas solicitudes.
      </p>
      <p class="text-muted text-center">
        Selecciona la visa de desea solicitar, estas seran revisadas por nuestro
        supervisores
      </p>
    </div>
    <div class="container my-5">
      <h4 class="text-center mt-4">Seleccionar la visa que desea solicitar</h4>
      <div class="text-center">
        <button class="btn btn-secondary my-3" @click="mostrarVisas = !mostrarVisas">
          {{ mostrarVisas ? "Ocultar" : "Mostrar" }} enlaces
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
              Visa Turista <i class="fa fa-cc-visa"></i>
            </button>
          </div>
          <div class="col-md-4">
            <button
              class="btn btn-success"
              @click="$router.push('/solicitud/visa-empresarial')"
            >
              Visa Empresarial <i class="fa fa-cc-visa"></i>
            </button>
          </div>
          <div class="col-md-4">
            <button
              class="btn btn-info"
              @click="$router.push('/solicitud/visa-diplomatica')"
            >
              Visa Diplomatica <i class="fa fa-cc-visa"></i>
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
      mostrarVisas: false,
    };
  },
  components: {},
  methods: {},
};
</script>
<style le scoped>
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
