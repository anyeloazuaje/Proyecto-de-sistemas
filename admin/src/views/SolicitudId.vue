<template>
  <div class="container">
    <div class="row">
      <h2 class="text-center mt-5">
        Detalles de la solicitud <i class="fas fa-info-circle my-2"></i>
      </h2>
      <div class="card mb-3">
        <div class="card-body" v-if="Object.keys(detallesVisa).length">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h4>
                  Datos del solicitante <i class="far fa-user-circle"></i>
                </h4>
                <p>
                  <i class="fas fa-user"></i> <strong>Nombre:</strong>
                  {{ detallesVisa.nombre }}
                </p>
                <p>
                  <i class="fas fa-user"> </i> <strong>Apellido:</strong>
                  {{ detallesVisa.apellido }}
                </p>
                <p>
                  <i class="fas fa-id-card-alt"></i>
                  <strong>Identificación:</strong>
                  {{ detallesVisa.identificacion }}
                </p>
                <p>
                  <i class="fas fa-venus-mars"></i> <strong>Sexo:</strong>
                  {{ detallesVisa.sexo }}
                </p>
                <p>
                  <i class="fas fa-sort-numeric-up"></i>
                  <strong>Edad:</strong> {{ detallesVisa.edad }}
                </p>
                <p>
                  <i class="fas fa-calendar-alt"></i>
                  <strong>Fecha de nacimiento:</strong>
                  {{ detallesVisa.fecha_nacimiento }}
                </p>
              </div>
              <div class="col-md-6">
                <h4>
                  Datos de la visa solicitada <i class="far fa-envelope"></i>
                </h4>
                <p>
                  <i class="fas fa-passport"></i> <strong>Tipo:</strong>
                  {{ detallesVisa.tipoVisa }}
                </p>
                <p>
                  <i class="fas fa-calendar-plus"></i>
                  <strong>Fecha de solicitud:</strong>
                  {{ detallesVisa.fechaCreacion.substring(0, 10) }}
                </p>
                <p>
                  <i class="fas fa-clock"></i> <strong>Estado:</strong>
                  <span>
                    <span v-if="detallesVisa.estado == 'Pendiente'">
                      <span class="badge bg-warning">{{
                        detallesVisa.estado
                      }}</span>
                    </span>
                    <span v-if="detallesVisa.estado == 'Aprobado'">
                      <span class="badge bg-success">{{
                        detallesVisa.estado
                      }}</span>
                    </span>
                    <span v-if="detallesVisa.estado == 'Rechazado'">
                      <span class="badge bg-danger">{{
                        detallesVisa.estado
                      }}</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-12">
                <h4 class="text-center">
                  Archivos adjuntos <i class="far fa-file-image"></i>
                </h4>
                <div class="row">
                  <div class="col-md-6 mt-5 text-center mt-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Identificación</h5>
                        <p class="card-text">
                          <a
                            :href="`http://localhost:3000/imagenes/${detallesVisa.urlIdentidad}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Identificación</strong>
                          </a>
                          <img
                            :src="`http://localhost:3000/imagenes/${detallesVisa.urlIdentidad}`"
                            class="img-fluid mt-2"
                            alt="Identificación"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-5 text-center mt-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Pasaporte</h5>
                        <p class="card-text">
                          <a
                            v-if="detallesVisa && detallesVisa.urlPasaporte"
                            :href="`http://localhost:3000/imagenes/${detallesVisa.urlPasaporte}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Pasaporte</strong>
                          </a>
                          <img
                            v-if="detallesVisa && detallesVisa.urlPasaporte"
                            :src="`http://localhost:3000/imagenes/${detallesVisa.urlPasaporte}`"
                            class="img-fluid mt-2"
                            alt="Pasaporte"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-5 text-center mt-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">
                          Fondo para cubrir gastos mínimo de
                          {{
                            detallesVisa.tipoVisa === "Turista"
                              ? "2000 €"
                              : detallesVisa.tipoVisa === "Negocios"
                              ? " 5000 €"
                              : "10000 €"
                          }}
                        </h5>
                        <p class="card-text">
                          <a
                            v-if="detallesVisa && detallesVisa.urlFondo"
                            :href="`http://localhost:3000/imagenes/${detallesVisa.urlFondo}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Fondo para cubrir gastos</strong>
                          </a>
                          <img
                            v-if="detallesVisa && detallesVisa.urlFondo"
                            :src="`http://localhost:3000/imagenes/${detallesVisa.urlFondo}`"
                            class="img-fluid mt-2"
                            alt="Fondo para cubrir gastos"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-5 text-center mt-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">
                          Factura de seguro médico monto
                          {{
                            detallesVisa.tipoVisa === "Turista"
                              ? "500 €"
                              : detallesVisa.tipoVisa === "Negocios"
                              ? " 1000 €"
                              : "1500 €"
                          }}
                        </h5>
                        <p class="card-text">
                          <a
                            v-if="detallesVisa && detallesVisa.urlFactura"
                            :href="`http://localhost:3000/imagenes/${detallesVisa.urlFactura}`"
                            target="_blank"
                          >
                            <i class="fas fa-file-image"></i>
                            <strong> Factura de seguro médico</strong>
                          </a>
                          <img
                            v-if="detallesVisa && detallesVisa.urlFactura"
                            :src="`http://localhost:3000/imagenes/${detallesVisa.urlFactura}`"
                            class="img-fluid mt-2"
                            alt="Factura Seguro medico imagen"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <template
                    v-if="detallesVisa && detallesVisa.tipoVisa === 'Negocios'"
                  >
                    <div class="row justify-content-center my-5">
                      <div class="col-md-6 text-center mt-2">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              Carta de invitación de Empresa
                            </h5>
                            <p class="card-text">
                              <a
                                v-if="
                                  detallesVisa &&
                                  detallesVisa.urlCartaEmpresarial
                                "
                                :href="`http://localhost:3000/imagenes/${detallesVisa.urlCartaEmpresarial}`"
                                target="_blank"
                              >
                                <i class="fas fa-file-image"></i>
                                <strong>Carta de invitación de Empresa</strong>
                              </a>
                              <img
                                v-if="
                                  detallesVisa &&
                                  detallesVisa.urlCartaEmpresarial
                                "
                                :src="`http://localhost:3000/imagenes/${detallesVisa.urlCartaEmpresarial}`"
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
                      detallesVisa && detallesVisa.tipoVisa === 'Diplomatica'
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
                                  detallesVisa &&
                                  detallesVisa.urlCartaDiplomatica
                                "
                                :href="`http://localhost:3000/imagenes/${detallesVisa.urlCartaDiplomatica}`"
                                target="_blank"
                              >
                                <i class="fas fa-file-image"></i>
                                <strong>Carta de invitación diplomatica</strong>
                              </a>
                              <img
                                v-if="
                                  detallesVisa &&
                                  detallesVisa.urlCartaDiplomatica
                                "
                                :src="`http://localhost:3000/imagenes/${detallesVisa.urlCartaDiplomatica}`"
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
                <div
                  class="container mt-4"
                  v-if="detallesVisa.estado === 'Pendiente'"
                >
                  <div class="text-center">
                    <h3>Definir solicitud de visa</h3>
                    <div class="container">
                      <button
                        class="btn btn-danger m-2"
                        @click="
                          establecerValorVisa(false);
                          mostrarBotonEnviar = true;
                        "
                      >
                        Rechazar
                        <i class="fas fa-times-circle"></i>
                      </button>
                      <button
                        class="btn btn-success m-2"
                        @click="
                          establecerValorVisa(true);
                          mostrarBotonEnviar = true;
                        "
                      >
                        Aprobar
                        <i class="fas fa-check-circle"></i>
                      </button>
                    </div>
                    <template v-if="definirVisa.aprobado === true">
                      <div class="container mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="fecha">
                                <strong> Fecha de la cita </strong>
                              </label>
                              <input
                                id="fecha"
                                type="date"
                                class="form-control"
                                :min="fechaMinima"
                                :max="fechaMaxima"
                                v-model="definirVisa.fechaCita"
                              />
                              <span v-if="errorCampos.includes('fechaCita')">
                                <span class="text-danger"
                                  >La fecha es requerida</span
                                >
                              </span>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="hora">
                                <strong> Hora cita </strong>
                              </label>
                              <input
                                id="hora"
                                type="time"
                                min="16:00"
                                max="22:00"
                                class="form-control"
                                v-model="definirVisa.horaCita"
                              />
                              <span v-if="errorCampos.includes('horaCita')">
                                <span class="text-danger"
                                  >La hora es requerida</span
                                >
                              </span>
                              <span v-if="errorHora">
                                <span class="text-danger"
                                  >La hora estipulada no es permitida</span
                                >
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="comentario">
                                <strong> Comentario de la solicitud </strong>
                              </label>
                              <textarea
                                class="form-control"
                                required
                                placeholder="Escriba el comentario..."
                                id="comentario"
                                v-model.trim="definirVisa.comentario"
                                cols="30"
                              ></textarea>
                              <span v-if="errorCampos.includes('comentario')">
                                <span class="text-danger"
                                  >El comentario es requerido</span
                                >
                              </span>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="Direccion">
                                <strong> Dirección Google Maps </strong>
                              </label>
                              <input
                                type="url"
                                class="form-control"
                                required
                                placeholder="URL Google Maps"
                                id="Direccion"
                                v-model.trim="definirVisa.direccion"
                                cols="30"
                              />
                              <span v-if="errorCampos.includes('direccion')">
                                <span class="text-danger"
                                  >La direccion es requerida</span
                                >
                              </span>
                              <span v-if="errorUrl">
                                <span class="text-danger"
                                  >La direccion de Google maps no es
                                  valida</span
                                >
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-if="definirVisa.aprobado === false">
                      <div class="container">
                        <div class="row mt-3">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="comentario">
                                <strong> Comentario de la solicitud </strong>
                              </label>
                              <textarea
                                class="form-control"
                                required
                                placeholder="Escriba el motivo de la respuesta..."
                                id="comentario"
                                v-model.trim="definirVisa.comentario"
                                cols="30"
                              ></textarea>
                              <span v-if="errorComentario" class="text-danger"
                                >El comentario es requerido</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <div class="d-grid gap-2" v-if="mostrarBotonEnviar">
                      <button
                        @click="enviarSolicitud"
                        class="btn background text-white mt-3 block"
                      >
                        Enviar <i class="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
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
  name: "SolicitudId",
  data() {
    return {
      detallesVisa: {},
      errorHora: false,
      errorComentario: false,
      errorUrl: false,
      errorCampos: [],
      mostrarBotonEnviar: null,
      fechaMinima: new Date().toISOString().split("T")[0],
      fechaMaxima: null,
      definirVisa: {
        aprobado: "",
        clienteId: "",
        comentario: "",
        direccion: null,
      },
    };
  },
  mounted() {
    this.detallesSolicitud();
    this.fechaMaxima = this.sumarFecha();
  },
  methods: {
    establecerValores() {
      (this.detallesVisa = {}),
        (this.errorHora = false),
        (this.errorComentario = false),
        (this.errorUrl = false),
        (this.errorCampos = []),
        (this.mostrarBotonEnviar = null),
        (this.fechaMinima = new Date().toISOString().split("T")[0]),
        (this.fechaMaxima = null),
        (this.definirVisa = {
          aprobado: "",
          clienteId: "",
          comentario: "",
          direccion: null,
        });
    },
    establecerValorVisa(valor) {
      this.definirVisa.aprobado = valor;
    },
    sumarFecha() {
      const fecha = new Date();
      fecha.setDate(fecha.getDate() + 15);
      return new Date(fecha).toISOString().split("T")[0];
    },
    async enviarSolicitud() {
      this.errorCampos = [];
      this.errorHora = false;
      this.errorUrl = false;
      this.errorComentario = false;
      if (this.definirVisa.aprobado === false && !this.definirVisa.comentario) {
        this.errorComentario = true;
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Debe escribir un comentario",
        });
        return;
      }
      if (
        this.definirVisa.aprobado &&
        !this.definirVisa.fechaCita &&
        !this.errorCampos.includes("fechaCita")
      ) {
        this.errorCampos.push("fechaCita");
      }
      if (
        this.definirVisa.aprobado &&
        !this.definirVisa.horaCita &&
        !this.errorCampos.includes("horaCita")
      ) {
        this.errorCampos.push("horaCita");
      }
      if (
        this.definirVisa.aprobado &&
        !this.definirVisa.comentario &&
        !this.errorCampos.includes("comentario")
      ) {
        this.errorCampos.push("comentario");
      }
      if (
        this.definirVisa.aprobado &&
        !this.definirVisa.direccion &&
        !this.errorCampos.includes("direccion")
      ) {
        this.errorCampos.push("direccion");
      }
      if (this.definirVisa.aprobado === true) {
        if (
          !this.definirVisa.direccion ||
          !this.definirVisa.comentario ||
          !this.definirVisa.fechaCita ||
          !this.definirVisa.horaCita
        ) {
          this.$store.dispatch("mostrarAlerta", {
            icono: "error",
            mensaje: "Debe completar todos los campos",
          });
          return;
        }
      }
      let horaSeleccionada;
      if (this.definirVisa.aprobado === true) {
        horaSeleccionada = Number(this.definirVisa.horaCita.substr(0, 2));
      }
      if (
        (this.definirVisa.aprobado && horaSeleccionada < 9) ||
        horaSeleccionada > 17
      ) {
        this.errorHora = true;
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La hora de la cita debes ser entre 9:00 a 17:00",
        });
        return;
      }
      let validarURL = /^(ftp|http|https):\/\/[^ "]+$/;
      if (this.definirVisa.aprobado === true) {
        if (
          !validarURL.test(this.definirVisa.direccion) ||
          !this.definirVisa.direccion.includes("maps")
        ) {
          this.errorUrl = true;
          this.$store.dispatch("mostrarAlerta", {
            icono: "error",
            mensaje: "La dirección de google maps no es compatible",
          });
          return;
        }
      }
      this.definirVisa.clienteId = this.detallesVisa.clienteId;
      try {
        const { data } = await this.axios.put(
          `definir-visa/${this.$route.params.visaId} `,
          this.definirVisa
        );
        this.$store.dispatch("mostrarAlerta", {
          icono: "success",
          mensaje: data.msg,
        });
        this.establecerValores();
        this.$router.push("/");
      } catch (error) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Error al enviar la solicitud",
        });
      }
    },
    async detallesSolicitud() {
      try {
        const { data } = await this.axios.get(
          `/detalles-visa/${this.$route.params.visaId}`
        );
        this.detallesVisa = data.visa;
      } catch (error) {
        this.$router.push("/");
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje:
            "Ocurrió un error al intentar obtener los datos de la solicitud",
        });
      }
    },
  },
};
</script>
<style >
body {
  background-color: #eee !important;
}
</style>
