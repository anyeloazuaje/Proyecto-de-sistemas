<template>
 <div class="container">
    <h1>Pantalla de inicio</h1>
  <button class="btn btn-danger" @click="logout">Salir</button>
 </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods:{
    logout(){
      localStorage.removeItem('token')
     window.location.href = '/login'
    }
  }
};
</script>
