<template>
  <div class="container">
    <div class="row mt-5">
      <template v-if="solicitudesPendientes.length">
        <template v-for="solicitudes in solicitudesPendientes">
          <div class="col-md-6 my-2" :key="solicitudes._id">
            <div class="card">
              <div class="card-header text-capitalize">
                <h4>
                  <i class="fas fa-bell"></i>
                  Visa {{ solicitudes.tipoVisa }}
                </h4>
              </div>
              <div class="card-body text-center">
                <p class="text-capitalize">
                  <i class="fas fa-user"></i> Cliente:
                  <b>{{ solicitudes.clienteId.nombre }} </b>
                </p>
                <p>
                  <i class="fas fa-calendar-alt"></i> Fecha de la solicitud:
                  <b>{{
                    new Date(solicitudes.fechaCreacion).toLocaleDateString()
                  }}</b>
                </p>
                <div class="text-center">
                  <a
                    style="display: block"
                    class="btn btn-primary background"
                    @click="$router.push(`/detallesVisa/${solicitudes._id}`)"
                  >
                    Ver detalles <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
      <div v-else>
        <div class="alert alert-info text-center">
          <h4>
            <i class="fas fa-info-circle"></i>
            No hay solicitudes pendientes
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      solicitudesPendientes: [],
    };
  },
  mounted() {
    this.obtenerSolicitudesPendientes();
  },
  methods: {
    async obtenerSolicitudesPendientes() {
      try {
        const { data } = await this.axios.get("/solicitudes-visa");
        this.solicitudesPendientes = data.solicitudes;
      } catch (error) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Ocurrió un error obteniendo las visas pendientes",
        });
      }
    },
  },
};
</script>
