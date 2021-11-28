<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5">
        <h1 class="text-center">¡Hola {{ $store.getters.nombreCliente }}!</h1>
        <p class="lead text-center">
          Bienvenido al sistema de solicitud de visas. Aqui podras realizar tus
          solicitudes y verificar el estado de la misma. Ten en cuenta que solo
          puedes manter tres solicitudes activas, luego que esta ya sea aprobada
          o rechazada, podras realizar nuevas solicitudes.
        </p>
        <p class="text-muted text-center">
          Selecciona la visa de desea solicitar, estas seran revisadas por
          nuestro supervisores
        </p>
      </div>
      <div class="col-md-6 mt-5">
        <img src="/img/home.png" alt="Imagen de inicio" class="img-fluid" />
      </div>
    </div>
    <div class="container my-5">
      <div>
        <h4 class="text-center text-muted">
          Elige la visa que deseas solicitar
        </h4>
      </div>
      <transition
        name="fade"
        mode="out-in"
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="row margin">
          <div class="col-md-4">
            <div class="card pointer" @click="$router.push('/solicitud/visa-turista')">
              <div class="card-body">
                  <img class="card-img-top visa-turista" src="/img/visa.svg" >
                <h5 class="card-title">Visa Empresarial</h5>
                <p class="card-text">
                  Visa para personas que desean trabajar en el extranjero.
                </p>
                <a  class="btn btn-primary w-100">Solicitar <i class="fas fa-hand-point-up"></i> </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
              <div class="card pointer" @click="$router.push('/solicitud/visa-empresarial')">
               <div class="card-body">
                  <img class="card-img-top visa-empresarial" src="/img/visa.svg" >
                <h5 class="card-title">Visa de Turista</h5>
                <p class="card-text">
                  Esta visa permite pasar por el pais sin restricciones.
                </p>
                <a  class="btn bg-empresarial text-white w-100">Solicitar <i class="fas fa-hand-point-up"></i> </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
              <div class="card pointer" @click="$router.push('/solicitud/visa-diplomatica')">
               <div class="card-body">
                  <img class="card-img-top visa-diplomatica" src="/img/visa.svg" >
                <h5 class="card-title">Visa Diplomatica</h5>
                <p class="card-text">
                   Visa para para funcionarios gubernamentales y Organizaciónes
                </p>
                <a  class="btn btn-info text-white w-100">Solicitar <i class="fas fa-hand-point-up"></i> </a>
              </div>
            </div>
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
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style>
.bg-empresarial {
  background: #2778c4 !important;
}
.bg-empresarial:hover {
  background: #278ceb;
}
</style>
<style  scoped>
.visa-turista {
  filter: invert(26%) sepia(100%) saturate(2345%) hue-rotate(209deg)
    brightness(103%) contrast(97%);
}
.visa-empresarial {
  filter: invert(38%) sepia(60%) saturate(914%) hue-rotate(172deg) brightness(96%) contrast(88%);
}
.visa-diplomatica {
filter: invert(64%) sepia(87%) saturate(1320%) hue-rotate(147deg) brightness(94%) contrast(100%);
}
.pointer {
  cursor: pointer;
}
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
