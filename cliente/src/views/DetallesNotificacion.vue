<template>
  <div class="container">
    <div class="row">
      <h2 class="text-center mt-5">
        <span
          v-if="visaNotificacion.aprobado === true"
          class="text-success my-2s"
          >Solicitud de visa aprobada <i class="fas fa-check"></i
        ></span>
        <span v-else class="text-danger my-2s"
          >Solicitud de visa rechazada <i class="fas fa-times"></i
        ></span>
      </h2>
      <div class="card mb-3">
        <div class="card-body" v-if="Object.keys(visaNotificacion).length">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h4>
                  Datos del solicitante <i class="far fa-user-circle"></i>
                </h4>
                <p>
                  <i class="fas fa-user"></i> <strong>Nombre: </strong>
                  {{ visaNotificacion.visaId.nombre }}
                </p>
                <p>
                  <i class="fas fa-user"> </i> <strong>Apellido: </strong>
                  {{ visaNotificacion.visaId.apellido }}
                </p>
                <p>
                  <i class="fas fa-id-card-alt"></i>
                  <strong>Identificación: </strong>
                  {{ visaNotificacion.visaId.identificacion }}
                </p>
                <p>
                  <i class="fas fa-venus-mars"></i> <strong>Sexo: </strong>
                  {{ visaNotificacion.visaId.sexo }}
                </p>
                <p>
                  <i class="fas fa-sort-numeric-up"></i>
                  <strong>Edad: </strong> {{ visaNotificacion.visaId.edad }}
                </p>
                <p>
                  <i class="fas fa-calendar-alt"></i>
                  <strong>Fecha de nacimiento: </strong>
                  {{ visaNotificacion.visaId.fecha_nacimiento }}
                </p>
              </div>
              <div class="col-md-6">
                <h4>
                  Datos de la visa solicitada <i class="far fa-envelope"></i>
                </h4>
                <p>
                  <i class="fas fa-passport"></i> <strong>Tipo: </strong>
                  {{ visaNotificacion.visaId.tipoVisa }}
                </p>
                <p>
                  <i class="fas fa-calendar-plus"></i>
                  <strong>Fecha de solicitud: </strong>
                  {{ visaNotificacion.visaId.fechaCreacion.substring(0, 10) }}
                </p>
                <p>
                  <i
                    :class="
                      visaNotificacion.aprobado === true
                        ? 'fas fa-calendar-check'
                        : 'fas fa-calendar-times'
                    "
                  ></i>
                  <strong>Fecha de resultado: </strong>
                  {{ visaNotificacion.fechaResultado.substring(0, 10) }}
                </p>
                <p>
                  <i class="fas fa-clock"></i> <strong>Estado:</strong>
                  <span>
                    <span v-if="visaNotificacion.visaId.estado == 'Pendiente'">
                      <span class="badge bg-warning">{{
                        visaNotificacion.visaId.estado
                      }}</span>
                    </span>
                    <span v-if="visaNotificacion.visaId.estado == 'Aprobado'">
                      <span class="badge bg-success">{{
                        visaNotificacion.visaId.estado
                      }}</span>
                    </span>
                    <span v-if="visaNotificacion.visaId.estado == 'Rechazado'">
                      <span class="badge bg-danger">{{
                        visaNotificacion.visaId.estado
                      }}</span>
                    </span>
                  </span>
                </p>
                <!-- <p v-if="visaNotificacion.aprobado === false">
                  <i class="fas fa-comment"></i>
                  <strong> Comentario: </strong>
                  <span class="text-danger">{{
                    visaNotificacion.comentario
                  }}</span>
                </p>
                <p v-else>
                  <i class="fas fa-comment"></i>
                  <strong> Comentario: </strong>
                  <span class="text-success">{{
                    visaNotificacion.comentario
                  }}</span>
                </p> -->
              </div>
            </div>
            <div class="row my-2">
              <h4 class="text-center mb-3">
                Datos de la notificación <i class="far fa-bell"></i>
              </h4>
              <div class="col-md-6">
                <p>
                  <i class="fas fa-comment"></i>
                  <strong>Comentario: </strong>
                  <span
                    v-if="visaNotificacion.aprobado === false"
                    class="text-danger"
                    >{{ visaNotificacion.comentario }}</span
                  >
                  <span
                    v-if="visaNotificacion.aprobado === true"
                    class="text-success"
                    >{{ visaNotificacion.comentario }}</span
                  >
                </p>
              </div>
              <template v-if="visaNotificacion.aprobado === true">
                <div class="col-md-6">
                  <p>
                    <i class="fas fa-calendar-week"></i>
                    <strong>Fecha cita: </strong>
                    <span>{{ visaNotificacion.fechaCita }}</span>
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    <i class="fas fa-user-clock"></i>
                    <strong>Hora cita: </strong>
                    <span>{{ visaNotificacion.horaCita }}</span>
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    <i class="fas fa-map-marked-alt"></i>
                    <strong> Dirección: </strong>
                    <a
                      class="text-success"
                      target="_blank"
                      :href="visaNotificacion.direccion"
                      >Abrir dirección Google Map</a
                    >
                  </p>
                </div>
              </template>
            </div>
            <div class="row justify-content-center">
              <div class="col-12">
                <h4 class="text-center">
                  Archivos adjuntos <i class="far fa-file-image"></i>
                </h4>
                <div class="row">
                  <div class="col-md-6 text-center mt-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Identificación</h5>
                        <p class="card-text">
                          <a
                            :href="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlIdentidad}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Identificación </strong>
                          </a>
                          <img
                            :src="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlIdentidad}`"
                            class="img-fluid mt-2"
                            alt="Identificación"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 text-center mt-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Pasaporte</h5>
                        <p class="card-text">
                          <a
                            v-if="
                              visaNotificacion &&
                              visaNotificacion.visaId.urlPasaporte
                            "
                            :href="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlPasaporte}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Pasaporte </strong>
                          </a>
                          <img
                            v-if="
                              visaNotificacion &&
                              visaNotificacion.visaId.urlPasaporte
                            "
                            :src="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlPasaporte}`"
                            class="img-fluid mt-2"
                            alt="Pasaporte"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 text-center mt-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">
                          Fondo para cubrir gastos mínimo de
                          {{
                            visaNotificacion.visaId.tipoVisa === "Turista"
                              ? "2000 €"
                              : visaNotificacion.visaId.tipoVisa === "Negocios"
                              ? " 5000 €"
                              : "10000 €"
                          }}
                        </h5>
                        <p class="card-text">
                          <a
                            v-if="
                              visaNotificacion &&
                              visaNotificacion.visaId.urlFondo
                            "
                            :href="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlFondo}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Fondo para cubrir gastos </strong>
                          </a>
                          <img
                            v-if="
                              visaNotificacion &&
                              visaNotificacion.visaId.urlFondo
                            "
                            :src="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlFondo}`"
                            class="img-fluid mt-2"
                            alt="Fondo para cubrir gastos"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 text-center mt-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">
                          Factura de seguro médico monto
                          {{
                            visaNotificacion.visaId.tipoVisa === "Turista"
                              ? "500 €"
                              : visaNotificacion.visaId.tipoVisa === "Negocios"
                              ? " 1000 €"
                              : "1500 €"
                          }}
                        </h5>
                        <p class="card-text">
                          <a
                            v-if="
                              visaNotificacion &&
                              visaNotificacion.visaId.urlFactura
                            "
                            :href="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlFactura}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Factura de seguro médico </strong>
                          </a>
                          <img
                            v-if="
                              visaNotificacion &&
                              visaNotificacion.visaId.urlFactura
                            "
                            :src="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlFactura}`"
                            class="img-fluid mt-2"
                            alt="Factura Seguro medico imagen"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <template
                    v-if="
                      visaNotificacion &&
                      visaNotificacion.visaId.tipoVisa === 'Negocios'
                    "
                  >
                    <div class="row justify-content-center my-5">
                      <div class="col-md-6 text-center mt-4">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              Carta de invitación de Empresa
                            </h5>
                            <p class="card-text">
                              <a
                                v-if="
                                  visaNotificacion &&
                                  visaNotificacion.visaId.urlCartaEmpresarial
                                "
                                :href="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlCartaEmpresarial}`"
                                target="_blank"
                              >
                                <i class="fas fa-file-image"></i>
                                <strong>Carta de invitación de Empresa </strong>
                              </a>
                              <img
                                v-if="
                                  visaNotificacion &&
                                  visaNotificacion.visaId.urlCartaEmpresarial
                                "
                                :src="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlCartaEmpresarial}`"
                                class="img-fluid mt-2"
                                alt="Carta de invitación de Empresa"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template
                    v-if="
                      visaNotificacion &&
                      visaNotificacion.visaId.tipoVisa === 'Diplomatica'
                    "
                  >
                    <div class="row justify-content-center my-5">
                      <div class="col-md-6 text-center mt-2">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              Carta de invitación diplomatica
                            </h5>
                            <p class="card-text">
                              <a
                                v-if="
                                  visaNotificacion &&
                                  visaNotificacion.visaId.urlCartaDiplomatica
                                "
                                :href="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlCartaDiplomatica}`"
                                target="_blank"
                              >
                                <i class="fas fa-file-image"></i>
                                <strong>Carta de invitación diplomatica</strong>
                              </a>
                              <img
                                v-if="
                                  visaNotificacion &&
                                  visaNotificacion.visaId.urlCartaDiplomatica
                                "
                                :src="`http://localhost:3000/imagenes/${visaNotificacion.visaId.urlCartaDiplomatica}`"
                                class="img-fluid mt-2"
                                alt="Carta de invitación diplomatica"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <div class="text-center spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetallesNotificacion",
  data() {
    return {
      visaNotificacion: {},
    };
  },
  mounted() {
    this.obtenerVisaNotificacion();
  },
  methods: {
    obtenerVisaNotificacion() {
      this.axios
        .get(`/detalles-notificacion/${this.$route.params.visaId}`)
        .then(({ data }) => {
          this.visaNotificacion = data.notificacion;
        })
        .catch((e) => {
          this.$store.dispatch("mostrarAlerta", {
            icono: "error",
            mensaje:
              "Ocurrió un error obteniendo los detalles de la notificación. " +
              e.response.data.msg,
          });
          this.$router.push("/");
        });
    },
  },
};
</script>

<style>
</style>