import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        return next();
      } else {
        return next('/login');
      }
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        return next('/');
      } else {
        return next();
      }
    },
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        return next('/');
      } else {
        return next();
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
