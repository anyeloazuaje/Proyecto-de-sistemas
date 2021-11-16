<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5">
        <h4 class="text-center">
          Usuarios Administradores <i class="fas fa-user-shield"></i>
        </h4>
        <p class="text-muted text-center">
          Listado de usuarios administradores disponibles
        </p>
      </div>
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="grid-margin stretch-card">
              <div class="card" v-if="usuarios.length">
                <div class="card-body">
                  <h4 class="card-title" v-if="usuarios.length">
                    Usuarios disponibles
                    <button
                      @click="$router.push('/agregar-usuarios')"
                      class="btn btn-primary btn-sm background"
                    >
                      Agregar <i class="fas fa-user-plus"></i>
                    </button>
                  </h4>
                  <p class="card-description" v-if="usuarios.length">
                    <span class="text-muted">
                      El usuarios administrador no se puede eliminar
                    </span>
                  </p>
                  <div class="table-responsive">
                    <table class="table" v-if="usuarios.length">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Usuario</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody v-for="usuario in usuarios" :key="usuario._id">
                        <tr>
                          <td class="text-capitalize">{{ usuario.nombre }}</td>
                          <td>{{ usuario.usuario }}</td>
                          <td>
                            <button
                              class="btn btn-danger btn-sm"
                              @click="eliminarUsuario(usuario._id)"
                              v-if="!(usuario.usuario === 'admin@email.com')"
                            >
                              Eliminar <i class="fas fa-user"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div v-else>
                <h4 class="text-center text-muted alert alert-info">
                  No existen usuarios administradores
                  <i class="fas fa-user-shield"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Usuarios",
  data() {
    return {
      usuarios: [],
    };
  },
  mounted() {
    this.obtenerUsuarios();
  },
  methods: {
    comprobarUsuario(idUsuario) {
      return this.$store.state.usuario.id === idUsuario;
    },
    async obtenerUsuarios() {
      try {
        const { data } = await this.axios.get("/obtener-usuarios");
        if (data.usuarios.length) return (this.usuarios = data.usuarios);
      } catch (error) {
        this.$store.dispatch("mostrarAlerta", {
          icono: "error",
          mensaje: "Error " + error.message,
        });
      }
    },
  },
};
</script>

<style>
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
    content: "Usuario";
  }
  td:nth-of-type(3):before {
    content: "Acción";
  }
}
</style>