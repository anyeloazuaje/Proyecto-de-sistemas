<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-12 mt-3">
        <h4 class="text-center">
          Registrar nuevo usuarios <i class="fas fa-user-shield"></i>
        </h4>
        <p class="text-muted text-center">
          Formulario de registro para nuevos usuarios Administradores
        </p>
      </div>
      <div class="col-md-6">
        <div class="card card-body mt-5">
          <form @submit.prevent="registrarUsuario">
            <div class="form-group my-3">
              <label for="nombre">Nombre</label>
              <input
                placeholder="Escribe el nombre del usuario"
                class="form-control"
                type="text"
                name=""
                id="nombre"
                v-model.trim="usuario.nombre"
              />
              <span v-if="errores.includes('nombre')" class="text-danger"
                >El nombre es requerido</span
              >
            </div>
            <div class="form-group my-3">
              <label for="usuario">Usuario</label>
              <input
                placeholder="Escribe el usuario de acceso"
                class="form-control"
                type="email"
                id="usuario"
                v-model.trim="usuario.usuario"
              />
              <span v-if="errores.includes('usuario')" class="text-danger"
                >El usuario es requerido</span
              >
            </div>
            <div class="form-group my-3">
              <label for="clave">Clave</label>
              <input
                placeholder="Escribe la clave de acceso"
                class="form-control"
                type="password"
                id="clave"
                v-model.trim="usuario.clave"
              />
              <span v-if="errores.includes('clave')" class="text-danger"
                >La clave es requerida</span
              >
            </div>
            <div class="form-group my-3">
              <label for="clave-confirmar">Confirmar clave</label>
              <input
                placeholder="Escribe la confirmacion de la clave de acceso"
                class="form-control"
                type="password"
                id="clave-confirmar"
                v-model.trim="usuario.confirmar"
              />
              <span v-if="errores.includes('confirmar')" class="text-danger"
                >La clave de confirmación es requerida</span
              >
              <span v-if="erroClave" class="text-danger"
                >La clave no coinciden</span
              >
            </div>
            <div class="d-grid gap-2 mt-4">
              <button class="btn btn-primary background btn-block">
                Enviar <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgregarUsuarios",
  data() {
    return {
      errores: [],
      erroClave: false,
      usuario: {
        nombre: "",
        usuario: "",
        clave: "",
        confirmar: "",
      },
    };
  },
  methods: {
    async registrarUsuario() {
      this.errores = [];
      this.erroClave = false;
      if (!this.usuario.nombre && !this.errores.includes("nombre")) {
        this.errores.push("nombre");
      }
      if (!this.usuario.usuario && !this.errores.includes("usuario")) {
        this.errores.push("usuario");
      }
      if (!this.usuario.clave && !this.errores.includes("clave")) {
        this.errores.push("clave");
      }
      if (!this.usuario.confirmar && !this.errores.includes("confirmar")) {
        this.errores.push("confirmar");
      }
      if (
        !this.usuario.nombre ||
        !this.usuario.usuario ||
        !this.usuario.clave ||
        !this.usuario.confirmar
      ) {
        return this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Todos los datos son requeridos",
        });
      }
      if (this.usuario.clave.length < 5) {
        return this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La clave debe ser de minimo 5 digítos",
        });
      }
      if (this.usuario.clave !== this.usuario.confirmar) {
        this.erroClave = true;
        return this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La clave deben ser iguales",
        });
      }
      const { confirmar, ...usuario } = this.usuario;
      try {
        const { data } = await this.axios.post("/registro-usuario", usuario);
        this.$store.dispatch("mostrarAlerta", {
          icono: "success",
          mensaje: data.msg,
        });
        this.usuario = {
          nombre: "",
          usuario: "",
          clave: "",
          confirmar: "",
        };
        setTimeout(function () {
          this.$router.push("/usuarios");
        }, 2000);
      } catch (error) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje:
            "Ocurrió un error registrando el usuario. " +
            error.response.data.msg,
        });
      }
    },
  },
};
</script>

<style>
</style>