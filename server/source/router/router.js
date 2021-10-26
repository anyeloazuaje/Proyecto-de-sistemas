const { Router } = require('express');
const {
  registroCliente,
  loginCliente,
} = require('../controller/controller.cliente');
const {
  loginUsuario,
  registroUsuario,
} = require('../controller/controller.usuario');
const {
  crearVisaTurista,
  crearVisaEmpresarial,
  crearVisaDiplomatica,
  detallesSolicitudVisa,
  solicitudesVisas,
  notificacionCliente,
  definirVisa,
  visasPendientesCliente,
  eliminarVisaCliente,
} = require('../controller/controller.visa');
const {
  autenticacionCliente,
  autenticacionAdmin,
} = require('../middleware/autorizacionToken');
const enrutador = Router();
const { subirArchivos } = require('../utils/subirArchivos');
enrutador.post('/registro-cliente', registroCliente);
enrutador.post('/login-cliente', loginCliente);
enrutador.post('/login-usuario', loginUsuario);
enrutador.post('/registro-usuario', registroUsuario);

enrutador.post(
  '/visa-turista',
  autenticacionCliente,
  subirArchivos.array('archivos', 4),
  crearVisaTurista
);
enrutador.post(
  '/visa-empresarial',
  autenticacionCliente,
  subirArchivos.array('archivos', 5),
  crearVisaEmpresarial
);
enrutador.post(
  '/visa-diplomatica',
  autenticacionCliente,
  subirArchivos.array('archivos', 5),
  crearVisaDiplomatica
);
enrutador.get('/visas-pendiente', autenticacionCliente, visasPendientesCliente);
enrutador.get('/notificaciones', autenticacionCliente, notificacionCliente);
enrutador.delete(
  '/eliminar-visa/:id',
  autenticacionCliente,
  eliminarVisaCliente
);
enrutador.get('/solicitudes-visa', autenticacionAdmin, solicitudesVisas);
enrutador.put('/definir-visa/:visaId', autenticacionAdmin, definirVisa);
enrutador.get(
  '/detalles-visa/:visaId',
  autenticacionAdmin,
  detallesSolicitudVisa
);
module.exports = enrutador;
