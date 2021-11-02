import { obtenerTokenAdmin } from '@/helper/token.js';
import { AUTENTICACION_TOKEN_ADMIN } from '@/base/main';
import axios from 'axios';
import router from '@/router/index';
import Swal from 'sweetalert2';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    usuario: {},
    tokenAdmin: localStorage.getItem(AUTENTICACION_TOKEN_ADMIN) || '',
    isLogged: false,
  },
  mutations: {
    setTokenAdmin(state, payload) {
      state.tokenAdmin = payload;
    },
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setIslogged(state, payload) {
      state.isLogged = payload;
    },
    setStore(state) {
      (state.tokenAdmin = null), (state.usuario = {});
      state.isLogged = false;
    },
  },
  actions: {
    logout(context) {
      localStorage.removeItem(AUTENTICACION_TOKEN_ADMIN);
      delete axios.defaults.headers.common['Authorization'];
      context.commit('setStore');
      router.push('/login');
    },
    mostrarAlerta(context, payload) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: payload.icono,
        title: payload.mensaje,
      });
    },
    establecerDatosAdmin(context, payload) {
      const { id, nombre } = obtenerTokenAdmin(payload);
      const usuario = {
        id,
        nombre,
      };
      localStorage.setItem(AUTENTICACION_TOKEN_ADMIN, payload);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload;
      context.commit('setTokenAdmin', payload);
      context.commit('setUsuario', usuario);
      context.commit('setIslogged', true);
    },
    getUsuario(context) {
      const token = localStorage.getItem(AUTENTICACION_TOKEN_ADMIN);
      if (token) {
        return context.dispatch('establecerDatosAdmin', token);
      } else {
        context.commit('setStore');
      }
    },
  },
  getters: {
    nombreUsuario: (store) => {
      return store.usuario.nombre;
    },
  },
});
