<template>
  <div class="container my-5">
    <h4 class="text-center">Notificaciones de solicitudes</h4>
    <p class="text-muted text-center">
      En esta sección se listaran las notificaciones de tus solicitudes. Puedes
      ingresar a los detalless de la solicitud haciendo click en el botón de ver
      más.
    </p>
    <hr />
    <div class="row" v-if="resultadosVisa.length">
      <div
        class="col-6 col-md-6 my-4"
        v-for="resultado in resultadosVisa"
        :key="resultado._id"
      >
        <div class="card bg-light">
          <div class="card-header">
            Resultado de la solicitud para la Visa de
            <b class="font">{{ resultado.visaId.tipoVisa }}</b>
          </div>
          <div class="card-body">
            <p class="card-text">
              <span class="font-weight-bold">Estado: </span>
              <span
                :class="[
                  resultado.aprobado ? 'bg-success' : 'bg-danger',
                  'badge',
                  'rounded-pill',
                ]"
              >
                {{ resultado.aprobado ? "Aprobado" : "Rechazado" }}
                <i
                  :class="resultado.aprobado ? 'fas fa-check' : 'fas fa-times'"
                ></i>
              </span>
            </p>
            <p class="card-text">
              <span class="font-weight-bold">Observación:</span>
              <strong> {{ resultado.comentario }}</strong>
            </p>
            <div v-if="resultado.aprobado">
              <p class="card-text">
                <span class="font-weight-bold">Fecha de la cita:</span>
                <strong> {{ resultado.fechaCita }}</strong>
              </p>

              <p class="card-text">
                <span class="font-weight-bold">Hora de la cita:</span>
                <strong> {{ resultado.horaCita }}</strong>
              </p>
              <p class="card-text my-2">
                <span class="font-weight-bold">Dirección Google Maps:</span>
                <a class="btn" :href="resultado.direccion" target="_blank">
                  <span class="badge badge-pill bg-primary"
                    >Abrir dirección <i class="fas fa-map-marker-alt"></i>
                  </span>
                </a>
              </p>
            </div>
            <div class="text-center">
              <button
                @click="
                  $router.push({
                    name: 'DetallesNotificacion',
                    params: { visaId: resultado._id },
                  })
                "
                :class="[
                  resultado.aprobado ? 'btn btn-success' : 'btn btn-danger',
                  'block',
                ]"
              >
                Ver detalles <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-center my-5 text-muted">
        No tienes notificaciones actualmente <i class="fas fa-bell-slash"></i>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifiaciones",
  data() {
    return {
      resultadosVisa: [],
    };
  },
  mounted() {
    this.obtenerResultados();
  },
  methods: {
    obtenerResultados() {
      this.axios
        .get("/notificaciones")
        .then((response) => {
          this.resultadosVisa = response.data.notificaciones;
        })
        .catch(() => {
          this.$store.dispatch("mostrarAlerta", {
            icono: "error",
            mensaje: "Ocurrió un error obteniendo las notificaciones",
          });
        });
    },
  },
};
</script>

<style>
.font {
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>