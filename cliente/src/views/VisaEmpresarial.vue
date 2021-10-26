<template>
  <div class="container">
    <main>
      <div class="py-3 text-center">
        <h2 class="text-center my-5">Solicitud de Visa  Empresarial</h2>
        <p class="text-muted">
          Completas los datos para la solicitud de Visa Empresarial. El orden de los
          archivos adjuantar son los indicados. La respuesta de la solicitud la
          recibiras en un lapso de 24 a 48 horas en días habiles.
        </p>
      </div>
      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-success">Archivos adjuntar</span>
            <span class="badge bg-success rounded-pill">5</span>
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
                <small class="text-muted">Con un mínimo de 5000 €</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0">Factura de pago de Seguro Médico</h6>
                <small class="text-muted">Con un monto de 1000 €</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div>
                <h6 class="my-0">Carta de invitación de Empresa</h6>
                <small class="text-muted">Donde certifique que trabajare en el país</small>
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
                  v-model.trim="visaEmpresarial.nombre"
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
                  v-model.trim="visaEmpresarial.apellido"
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
                  v-model.number="visaEmpresarial.identificacion"
                />
              </div>

              <div class="col-sm-6">
                <label for="sexo" class="form-label">Sexo</label>
                <select
                  name=""
                  class="form-control"
                  id="sexo"
                  v-model="visaEmpresarial.sexo"
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
                  v-model.number="visaEmpresarial.edad"
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
                  v-model="visaEmpresarial.fecha_nacimiento"
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
                    >(Con un mínimo de 5000 €)</small
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
                  <span class="text-muted">(Con un monto de 1000 €)</span></label
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
              <div class="col-12">
                <label for="carta-empresarial" class="form-label"
                  >Carta de invitación de Empresa 
                    <span class="text-muted">(En la que trabajara en el país)</span></label>
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  class="form-control"
                  id="carta-empresarial"
                  :ref="5"
                  @change="obtenerImagen(5)"
                  required
                />
              </div>
            </div>
            <hr class="my-4" />
            <button class="w-100 btn btn-success btn-lg" type="submit">
              Enviar solicitud <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </main>
    <Footer
        titulo="Solicitud de Visa Empresarial"
       />
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: "VisaEmpresarial",
  components:{
      Footer
  },
  data() {
    return {
      visaEmpresarial: {
        nombre: "",
        apellido: "",
        identificacion: "",
        sexo: "",
        edad: "",
        fecha_nacimiento: "",
        tipoVisa: "Negocios",
        archivos: [],
      },
      imagenes: {},
    };
  },
  methods: {
    obtenerImagen(tipo) {
      this.imagenes[tipo] = this.$refs[tipo].files[0];
      if (Object.keys(this.imagenes).length == 5) {
        this.ordenarImagenes();
      }
    },
    ordenarImagenes() {
      Object.entries(this.imagenes)
        .sort()
        .forEach((imagen) => {
          this.visaEmpresarial.archivos.push(imagen);
        });
    },
    async enviarSolicitud() {
      if (
        this.visaEmpresarial.nombre == "" ||
        this.visaEmpresarial.apellido == "" ||
        this.visaEmpresarial.identificacion == "" ||
        this.visaEmpresarial.sexo == "" ||
        this.visaEmpresarial.edad == "" ||
        this.visaEmpresarial.fecha_nacimiento == "" ||
        this.visaEmpresarial.archivos.length != 5
      ) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Todos los campos son obligatorios, verifique e intente nuevamente",
        });
        return;
      }
      let identficacion = this.visaEmpresarial.identificacion;
      identficacion = identficacion.toString();
      if (identficacion.length != 8) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La identificación debe tener 8 dígitos.",
        });
        return;
      }
      if (this.visaEmpresarial.edad < 10 || this.visaEmpresarial.edad > 100) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La edad debe estar entre 10 y 100 años.",
        });
        return;
      }
      if (this.visaEmpresarial.fecha_nacimiento > "2010-01-31") {
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
      bodyFormData.append("nombre", this.visaEmpresarial.nombre);
      bodyFormData.append("apellido", this.visaEmpresarial.apellido);
      bodyFormData.append("identificacion", this.visaEmpresarial.identificacion);
      bodyFormData.append("sexo", this.visaEmpresarial.sexo);
      bodyFormData.append("edad", this.visaEmpresarial.edad);
      bodyFormData.append(
        "fecha_nacimiento",
        this.visaEmpresarial.fecha_nacimiento
      );
      bodyFormData.append("tipoVisa", this.visaEmpresarial.tipoVisa);
      bodyFormData.append("archivos", this.imagenes[1]);
      bodyFormData.append("archivos", this.imagenes[2]);
      bodyFormData.append("archivos", this.imagenes[3]);
      bodyFormData.append("archivos", this.imagenes[4]);
      bodyFormData.append("archivos", this.imagenes[5]);
      this.axios
        .post("/visa-empresarial", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$store.dispatch("mostrarAlerta", {
            icono: "success",
            mensaje: "Solicitud para Visa Emprerial creada correctamente.",
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
};
</script>
