<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <form @submit.prevent="registroUsuario" class="form">
            <h1>Registrate</h1>
            <p class="text-muted">
              Ingresa los datos solicitados para el registro
            </p>
            <input
              v-model.trim="registro.nombre"
              type="text"
              placeholder="Nombre"
            />
            <input
              v-model.trim="registro.apellido"
              type="text"
              placeholder="Apellido"
            />
            <input
              v-model.trim="registro.correo"
              type="email"
              placeholder="Correo"
            />
            <input
              v-model.trim="registro.clave"
              type="password"
              placeholder="Clave"
            />
            <router-link class="text-decoration-none text-muted" to="/login"
              >¿Ya tienes cuenta? Inciar sesión</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Login",
  data() {
    return {
      registro: {
        nombre: "",
        apellido: "",
        correo: "",
        clave: "",
      },
    };
  },
  methods: {
    registroUsuario() {
      if (this.registro.clave.length < 5) {
        return this.mostrarAlerta(
          "error",
          "La clave debe tener al menos 5 caracteres"
        );
      }
      if (
        !this.registro.nombre ||
        !this.registro.apellido ||
        !this.registro.correo ||
        !this.registro.clave
      ) {
        return this.mostrarAlerta("error", "Todos los campos son obligatorios");
      }
      this.axios
        .post("/registro-cliente", this.registro)
        .then((response) => {
          if (response.status === 201) {
            this.mostrarAlerta("success", "Registro exitoso");
            this.$router.push("/login");
          } else {
            this.mostrarAlerta("error", "Error al registrar");
          }
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

.form input[type="text"],
.form input[type="password"],
.form input[type="email"] {
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

  .form input[type="text"]:focus,
  .form input[type="password"]:focus,
  .form input[type="email"]:focus {
    width: 200px;
    border-color: #2ecc71;
  }
}
</style>