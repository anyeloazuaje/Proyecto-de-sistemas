const jwt = require('jsonwebtoken');
const crearToken = (datosFirmar) => {
  const tokenFirmado = jwt.sign(datosFirmar, process.env.SECRET);
  return tokenFirmado;
};
const decodificarToken = (token) => {
  const decodeToken = jwt.verify(token, process.env.SECRET);
  return decodeToken;
};
const obtenerToken = (token) => {
  const soloToken = token.split(' ')[1];
  return soloToken;
};

module.exports = {
  crearToken,
  decodificarToken,
  obtenerToken,
};
