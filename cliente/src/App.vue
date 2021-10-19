<template>
  <div :class="autenticado ? '' : 'bg'">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
  computed:{
    autenticado(){
    return localStorage.getItem('token') 
  }
  }
};
</script>

<style>
.bg {
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  min-height: 100vh;
}
</style>