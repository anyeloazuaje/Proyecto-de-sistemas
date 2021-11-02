const { AUTENTICACION_TOKEN_ADMIN } = require('../base/main');
export const necesitaAutenticacion = (to, from, next) => {
  if (localStorage.getItem(AUTENTICACION_TOKEN_ADMIN)) {
    return next();
  } else {
    return next('/login');
  }
};

export const noNecesitAutenticacion = (to, from, next) => {
  if (localStorage.getItem(AUTENTICACION_TOKEN_ADMIN)) {
    return next('/');
  } else {
    return next();
  }
};
