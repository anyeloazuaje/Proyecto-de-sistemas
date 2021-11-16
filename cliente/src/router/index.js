import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import VisaTurista from '../views/VisaTurista.vue';
import VisaEmpresarial from '../views/VisaEmpresarial.vue';
import VisaDiplomatica from '../views/VisaDiplomatica.vue';
import Pendiente from '../views/Pendiente.vue';
import Notificaciones from '../views/Notificaciones.vue';
import DetallesNotificacion from '../views/DetallesNotificacion.vue';
import {
  noNecesitAutenticacion,
  necesitaAutenticacion,
} from '../helper/manejoAutentacion';
Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/solicitudes-pendiente',
    name: 'Pendiente',
    component: Pendiente,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/notificaciones',
    name: 'Notificaciones',
    component: Notificaciones,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/solicitud/visa-turista',
    name: 'VisaTurista',
    component: VisaTurista,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/solicitud/visa-empresarial',
    name: 'VisaEmpresarial',
    component: VisaEmpresarial,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/solicitud/visa-diplomatica',
    name: 'VisaDiplomatica',
    component: VisaDiplomatica,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/visa-notificacion/:visaId',
    name: 'DetallesNotificacion',
    component: DetallesNotificacion,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: noNecesitAutenticacion,
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue'),
    beforeEnter: noNecesitAutenticacion,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
