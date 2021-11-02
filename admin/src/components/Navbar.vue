<template>
  <header>
    <div class="px-3 py-2 background text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          Bienvenido {{$store.getters.nombreUsuario }}  <span class="m-1">  <i class="fas fa-user-shield"></i></span>
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <router-link to="/" class="nav-link text-white">
                Inicio <i class="fas fa-home"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/usuarios" class="nav-link text-white">
                Usuarios <i class="fas fa-user"></i>
              </router-link>
            </li>
            <li>
              <a  @click="$store.dispatch('logout')" class="nav-link text-white btn btn-danger">
                Cerrar sesión <i class="fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
name: 'Navbar',
}
</script>

<style>
.background{
  background: #084298 !important;
}
</style>