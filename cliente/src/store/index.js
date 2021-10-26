import Vue from 'vue';
import Vuex from 'vuex';
import { obtenerToken } from '@/helper/token.js';
import { AUTENTICACION_TOKEN } from '@/base/main';
import axios from 'axios';
import router from '@/router/index';
import Swal from 'sweetalert2';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    cliente: {},
    token: localStorage.getItem(AUTENTICACION_TOKEN) || '',
    isLogged: false,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setCliente(state, payload) {
      state.cliente = payload;
    },
    setIslogged(state, payload) {
      state.isLogged = payload;
    },
    setStore(state) {
      (state.token = null), (state.cliente = {});
      state.isLogged = false;
    },
  },
  actions: {
    logout(context) {
      localStorage.removeItem(AUTENTICACION_TOKEN);
      delete axios.defaults.headers.common['Authorization'];
      context.commit('setStore');
      router.push('/login');
    },
    notificaciones() {
      return 2;
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
    establecerDatos(context, payload) {
      const { id, nombre } = obtenerToken(payload);
      const cliente = {
        id,
        nombre,
      };
      localStorage.setItem(AUTENTICACION_TOKEN, payload);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload;
      context.commit('setToken', payload);
      context.commit('setCliente', cliente);
      context.commit('setIslogged', true);
    },
    getCliente(context) {
      const token = localStorage.getItem(AUTENTICACION_TOKEN);
      if (token) {
        return context.dispatch('establecerDatos', token);
      } else {
        context.commit('setStore');
      }
    },
  },
  getters: {
    nombreCliente: (store) => {
      return store.cliente.nombre;
    },
  },
});
