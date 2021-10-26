<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <h4 class="text-center">Solicitutes de visa pendiente</h4>
        <p class="text-muted text-center">
          En esta sección se lista la visa que esta pendiente de aprobación.
          Cuando la visa sea aprobada o rechazada se eliminara de esta sección.
        </p>
      </div>
      <hr />
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title" v-if="visaPendiente.length">
                    Datos principales
                  </h4>
                  <p class="card-description" v-if="visaPendiente.length">
                    Visas en espera
                  </p>
                  <div class="table-responsive">
                    <table class="table" v-if="visaPendiente.length">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Apellido</th>
                          <th>Identificación</th>
                          <th>Solicitada el</th>
                          <th>Tipo Visa</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody v-for="visa in visaPendiente" :key="visa._id">
                        <tr>
                          <td class="text-capitalize">{{ visa.nombre }}</td>
                          <td class="text-capitalize">{{ visa.apellido }}</td>
                          <td>{{ visa.identificacion }}</td>
                          <td>
                            {{
                              new Date(visa.fechaCreacion).toLocaleDateString()
                            }}
                          </td>
                          <td>
                            <span
                              :class="[
                                visa.tipoVisa === 'Turista'
                                  ? 'bg-primary text-white'
                                  : visa.tipoVisa === 'Negocios'
                                  ? 'bg-success text-white'
                                  : 'bg-info',
                                'badge',
                                'rounded-pill',
                                'text-dark',
                              ]"
                              >{{ visa.tipoVisa }}</span
                            >
                          </td>
                          <td>
                            <button
                              class="btn btn-danger btn-sm"
                              @click="eliminarVisa(visa)"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div v-else>
                      <h4 class="text-center text-muted">
                        No tienes solicitudes de visa pendiente actualmente <i class="fas fa-comment-slash"></i>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Pendiente",
  data() {
    return {
      visaPendiente: [],
    };
  },
  mounted() {
    this.obtenerVisaPendiente();
  },
  methods: {
    eliminarVisa(visa) {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "Esta acción no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          this.axios
            .delete(`/eliminar-visa/${visa._id}`)
            .then(() => {
              this.$store.dispatch("mostrarAlerta", {
                icono: "success",
                mensaje: `Solicitud de Visa ${visa.tipoVisa} eliminada correctamente`,
              });
              this.obtenerVisaPendiente();
            })
            .catch(() => {
              this.$store.dispatch("mostrarAlerta", {
                icono: "error",
                mensaje: "Error al eliminar la solicitud",
              });
            });
        }
      });
    },
    obtenerVisaPendiente() {
      this.axios
        .get("/visas-pendiente")
        .then((response) => {
          this.visaPendiente = response.data.visasPendiente;
        })
        .catch((e) => {
          this.$store.dispatch("mostrarAlerta", {
            icono: "error",
            mensaje: "Ocurrió un error obteniendo las visas pendientes.",
          });
        });
    },
  },
};
</script>

<style scoped>
.flex {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

@media only screen and (max-width: 1000px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table,
  thead,
  tbody,
  td,
  tr {
    display: block;
  }
  th {
    display: none;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    text-transform: capitalize !important;
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50% !important;
  }

  td:before {
    text-transform: capitalize !important;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  td:nth-of-type(1):before {
    content: "Nombre";
  }
  td:nth-of-type(2):before {
    content: "Apellido";
  }
  td:nth-of-type(3):before {
    content: "Identificacion";
  }
  td:nth-of-type(4):before {
    content: "Solicitada el";
  }
  td:nth-of-type(5):before {
    content: "Tipo";
  }
  td:nth-of-type(6):before {
    content: "Acción";
  }
}

.padding {
  padding: 5rem;
}

.card {
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d2d2dc;
  border-radius: 0;
}

.card .card-title {
  color: #000000;
  margin-bottom: 0.625rem;
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 500;
}

.card .card-description {
  margin-bottom: 0.875rem;
  font-weight: 400;
  color: #76838f;
}

p {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.table,
.jsgrid .jsgrid-table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table thead th,
.jsgrid .jsgrid-table thead th {
  border-top: 0;
  border-bottom-width: 1px;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
}

.table td,
.jsgrid .jsgrid-table td {
  font-size: 0.875rem;
  padding: 0.875rem 0.9375rem;
}

.badge {
  border-radius: 0;
  font-size: 12px;
  line-height: 1;
  padding: 0.375rem 0.5625rem;
  font-weight: normal;
}
</style>