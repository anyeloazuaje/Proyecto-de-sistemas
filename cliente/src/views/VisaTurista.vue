<template>
  <div class="container">
    <main>
      <div class="py-3 text-center">
        <h2 class="text-center my-5">Solicitud de Visa de Turista</h2>
        <p class="text-muted">
          Completas los datos para la solicitud de Visa Turista. El orden de los
          archivos adjuantar son los indicados. La respuesta de la solicitud la
          recibiras en un lapso de 24 a 48 horas en días habiles.
        </p>
      </div>
      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Archivos adjuntar</span>
            <span class="badge bg-success rounded-pill">4</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Imagen de identidad</h6>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Imagen de pasaporte</h6>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Imagen de fondos para cubrir gastos</h6>
                <small class="text-muted">Con un mínimo de 2000 €</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div>
                <h6 class="my-0">Factura de pago de Seguro Médico</h6>
                <small class="text-muted">Con un monto de 500 €</small>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Datos personales</h4>
          <form @submit.prevent="enviarSolicitud">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  placeholder="Ingrese el nombre"
                  required
                  v-model.trim="visaTurista.nombre"
                />
              </div>

              <div class="col-sm-6">
                <label for="apellido" class="form-label">Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  id="apellido"
                  placeholder="Ingrese el apellido"
                  required
                  v-model.trim="visaTurista.apellido"
                />
              </div>
              <div class="col-sm-6">
                <label for="identificacion" class="form-label"
                  >Identificacion</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="identificacion"
                  placeholder="Ingrese la identificación"
                  value=""
                  required
                  v-model.number="visaTurista.identificacion"
                />
              </div>

              <div class="col-sm-6">
                <label for="sexo" class="form-label">Sexo</label>
                <select
                  name=""
                  class="form-control"
                  id="sexo"
                  v-model="visaTurista.sexo"
                >
                  <option value="" disabled selected>Seleccionar</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
              <div class="col-sm-6">
                <label for="edad" class="form-label">Edad</label>
                <input
                  type="number"
                  class="form-control"
                  id="edad"
                  placeholder="Ingrese la edad"
                  min="10"
                  max="100"
                  required
                  v-model.number="visaTurista.edad"
                />
              </div>

              <div class="col-sm-6">
                <label for="fecha-nacimiento" class="form-label"
                  >Fecha de nacimiento</label
                >
                <input
                  type="date"
                  max="2010-01-31"
                  class="form-control"
                  id="fecha-nacimiento"
                  required
                  v-model="visaTurista.fecha_nacimiento"
                />
              </div>
              <h4>Archivos adjuntar</h4>
              <div class="col-12">
                <label for="identidad" class="form-label"
                  >Imagen de identidad</label
                >
                <div class="input-group">
                  <input
                    @change="obtenerImagen(1)"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    class="form-control"
                    id="identidad"
                    :ref="1"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <label for="pasaporte" class="form-label"
                  >Imagen de Pasaporte</label
                >
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  class="form-control"
                  :ref="2"
                  id="pasaporte"
                  required
                  @change="obtenerImagen(2)"
                />
              </div>
              <div class="col-12">
                <label for="factura-pago" class="form-label"
                  >Factura de pago
                  <small class="text-muted"
                    >(Con un mínimo de 2000 €)</small
                  ></label
                >
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  class="form-control"
                  :ref="3"
                  id="factura-pago"
                  @change="obtenerImagen(3)"
                  required
                />
              </div>
              <div class="col-12">
                <label for="factura-medico" class="form-label"
                  >Factura seguro médico
                  <span class="text-muted">(Con un monto de 500 €)</span></label
                >
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  class="form-control"
                  id="factura-medico"
                  :ref="4"
                  @change="obtenerImagen(4)"
                  required
                />
              </div>
            </div>
            <hr class="my-4" />
            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Enviar solicitud <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </main>
    <Footer titulo="Solicitud de Visa Turista" />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "VisaTurista",
  components: {
    Footer,
  },
  data() {
    return {
      visaTurista: {
        nombre: "",
        apellido: "",
        identificacion: "",
        sexo: "",
        edad: "",
        fecha_nacimiento: "",
        tipoVisa: "Turista",
        archivos: [],
      },
      imagenes: {},
    };
  },
  methods: {
    obtenerImagen(tipo) {
      this.imagenes[tipo] = this.$refs[tipo].files[0];
      if (Object.keys(this.imagenes).length == 4) {
        this.ordenarImagenes();
      }
    },
    ordenarImagenes() {
      Object.entries(this.imagenes)
        .sort()
        .forEach((imagen) => {
          this.visaTurista.archivos.push(imagen);
        });
    },
    async enviarSolicitud() {
      if (
        this.visaTurista.nombre == "" ||
        this.visaTurista.apellido == "" ||
        this.visaTurista.identificacion == "" ||
        this.visaTurista.sexo == "" ||
        this.visaTurista.edad == "" ||
        this.visaTurista.fecha_nacimiento == "" ||
        this.visaTurista.archivos.length != 4
      ) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Todos los campos son obligatorios.",
        });
        return;
      }
      let identficacion = this.visaTurista.identificacion;
      identficacion = identficacion.toString();
      if (identficacion.length != 8) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La identificación debe tener 8 dígitos.",
        });
        return;
      }
      if (this.visaTurista.edad < 10 || this.visaTurista.edad > 100) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La edad debe estar entre 10 y 100 años.",
        });
        return;
      }
      if (this.visaTurista.fecha_nacimiento > "2010-01-31") {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La fecha de nacimiento no puede ser mayor a 31/01/2010.",
        });
        return;
      }
      const visasPendientes = await this.axios.get("/visas-pendiente");
      if (visasPendientes.tieneVisasPendiente) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Ya tienes solicitud pendiente.",
        });
        this.visaTurista = {
          nombre: "",
          apellido: "",
          identificacion: "",
          sexo: "",
          edad: "",
          fecha_nacimiento: "",
          tipoVisa: "Turista",
          archivos: [],
        };
        this.imagenes = {};
        setTimeout(() => {
        this.$router.push("/solicitudes-pendiente");
        }, 2000);
        return;
      }
      const bodyFormData = new FormData();
      bodyFormData.append("nombre", this.visaTurista.nombre);
      bodyFormData.append("apellido", this.visaTurista.apellido);
      bodyFormData.append("identificacion", this.visaTurista.identificacion);
      bodyFormData.append("sexo", this.visaTurista.sexo);
      bodyFormData.append("edad", this.visaTurista.edad);
      bodyFormData.append(
        "fecha_nacimiento",
        this.visaTurista.fecha_nacimiento
      );
      bodyFormData.append("tipoVisa", this.visaTurista.tipoVisa);
      bodyFormData.append("archivos", this.imagenes[1]);
      bodyFormData.append("archivos", this.imagenes[2]);
      bodyFormData.append("archivos", this.imagenes[3]);
      bodyFormData.append("archivos", this.imagenes[4]);
      this.axios
        .post("/visa-turista", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$store.dispatch("mostrarAlerta", {
            icono: "success",
            mensaje: "Solicitud para Visa Turista envíada correctamente.",
          });
          this.visaTurista = {
            nombre: "",
            apellido: "",
            identificacion: "",
            sexo: "",
            edad: "",
            fecha_nacimiento: "",
            tipoVisa: "Turista",
            archivos: [],
          };
          (this.imagenes = {}),
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
        })
        .catch((error) => {
          this.$store.dispatch("mostrarAlerta", {
            icono: "error",
            mensaje: `Error al enviar la solicitud. ${error.response.data.msg}`,
          });
        });
    },
  },
  computed: {
    anioActual() {
      return new Date().getFullYear();
    },
  },
};
</script>
