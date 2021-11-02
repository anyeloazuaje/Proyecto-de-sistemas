<template>
  <div class="login-contenedor">
    <h2>Login Administrativo</h2>
    <form>
      <div class="form-group-contenedor">
        <input type="text" v-model.trim="login.usuario" required />
        <label>Usuario</label>
      </div>
      <div class="form-group-contenedor">
        <input type="password" v-model.trim="login.clave" required />
        <label>Clave</label>
      </div>
      <a href="#" @click="loginUsuario" type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Enviar
      </a>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        usuario: "",
        clave: "",
      },
    };
  },
  methods: {
    async loginUsuario() {
      if (!this.login.usuario || !this.login.clave) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "El usuario y la clave son requeridos",
        });
        return;
      }
      if (this.login.clave.length < 5) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "La clave debe ser de minimo 5 caracteres",
        });
        return;
      }

      try {
        const { data } = await this.axios.post("/login-usuario", this.login);
        this.$store.dispatch("mostrarAlerta", {
          icono: "success",
          mensaje: `Bienvenido administrador: ${this.login.usuario}`,
        });
        localStorage.setItem("admin-token", data.token);
        window.location.href = "/";
        this.login.usuario = "";
        this.login.clave = "";
      } catch (error) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: error.response.data.msg,
        });
      }
    },
  },
};
</script>
 
<style scoped>
.login-contenedor {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-contenedor h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-contenedor .form-group-contenedor {
  position: relative;
}

.login-contenedor .form-group-contenedor input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-contenedor .form-group-contenedor label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-contenedor .form-group-contenedor input:focus ~ label,
.login-contenedor .form-group-contenedor input:valid ~ label {
  top: -20px;
  left: 0;
  color: #084298;
  font-size: 12px;
}

.login-contenedor form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #084298;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-contenedor a:hover {
  background: #084298;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #084298, 0 0 25px #084298, 0 0 50px #084298,
    0 0 100px #084298;
}

.login-contenedor a span {
  position: absolute;
  display: block;
}

.login-contenedor a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-contenedor a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-contenedor a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-contenedor a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>