const { obtenerToken, decodificarToken } = require('../utils/token');
const verificarToken = (req, res, next) => {
  let tokenHeader = req.headers['authorization'];
  if (!tokenHeader) {
    return res.status(401).json({ msg: 'El token no ha sido proveído.' });
  }
  next();
};
const autenticacionAdmin = (req, res, next) => {
  let tokenHeaderAdmin = req.headers['authorization'];
  if (!tokenHeaderAdmin) {
    return res.status(401).json({ msg: 'El token no ha sido proveído.' });
  }
  tokenHeaderAdmin = obtenerToken(tokenHeaderAdmin);
  try {
    const datosToken = decodificarToken(tokenHeaderAdmin);
    const adminAutenticando = {};
    req.usuario = adminAutenticando;
    next();
  } catch (error) {
    res.status(403).json({ msg: 'El token es invalido.' });
  }
};
const autenticacionCliente = (req, res, next) => {
  let tokenHeaderCliente = req.headers['authorization'];
  if (!tokenHeaderCliente) {
    return res.status(401).json({ msg: 'El token no ha sido proveído.' });
  }
  tokenHeaderCliente = obtenerToken(tokenHeaderCliente);
  try {
    const datosTokenCliente = decodificarToken(tokenHeaderCliente);
    const clienteAutenticado = {
      id: datosTokenCliente.id,
      nombre: datosTokenCliente.nombre,
    };
    req.cliente = clienteAutenticado;
    next();
  } catch (error) {
    res.status(403).json({ msg: 'El token es invalido.' });
  }
};
module.exports = {
  verificarToken,
  autenticacionAdmin,
  autenticacionCliente,
};
