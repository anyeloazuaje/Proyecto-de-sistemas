<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <form @submit.prevent="iniciarSesion" class="form">
            <h1>Iniciar Sesión</h1>
            <p class="text-muted">Ingresa los datos solicitados para iniciar sesión</p>
            <input
              v-model.trim="login.correo"
              type="email"
              placeholder="Correo"
            />
            <input
              v-model.trim="login.clave"
              type="password"
              placeholder="Clave"
            />
            <router-link class="text-decoration-none text-muted" to="/registro"
              >¿No tienes Cuenta? Registrate</router-link
            >
            <input type="submit" name="" value="Login" href="#" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      login: {
        correo: "",
        clave: "",
      },
    };
  },
  methods: {
    mostrarAlerta(tipoIcono, mensaje) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: tipoIcono,
        title: mensaje,
      });
    },
    iniciarSesion() {
      if (this.login.correo.clave < 5) {
        return this.mostrarAlerta(
          "error",
          "La clave debe ser de minimo 5 caracteres",
        );
      }
      if (!this.login.correo || !this.login.clave) {
        return this.mostrarAlerta(
          "error",
          "Todos los campos son obligatorios",
        );
      }
      axios
        .post("http://localhost:3000/api/login-cliente", this.login)
        .then((resp) => {
          this.mostrarAlerta("success", `Bienvenido: ${this.login.correo}`);
          localStorage.setItem("token", resp.data.token);
          window.location.href = "/";
          this.login.correo = ""
          this.login.clave = ""
        })
        .catch((error) => {
          this.mostrarAlerta("error", error.response.data.msg);
        });
    },
  },
};
</script>
.<style scoped>
.card {
  margin-bottom: 20px;
  border: none;
}

.form {
  width: 500px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #191919;
  text-align: center;
  transition: 0.25s;
  margin-top: 100px;
}

.form input[type="email"],
.form input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.form h1 {
  color: white;
  text-transform: capitalize;
  font-weight: 500;
}

.form input[type="text"]:focus,
.form input[type="password"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.form input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.form input[type="submit"]:hover {
  background: #2ecc71;
}

@media screen and (max-width: 713px) {
  .form {
    width: 335px !important;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 0 !important;
    background: #191919;
    text-align: center;
    transition: 0.25s;
    margin-top: 100px;
  }
  .form input[type="email"]:focus,
.form input[type="password"]:focus {
  width: 210px;
  border-color: #2ecc71;
}

}
</style>