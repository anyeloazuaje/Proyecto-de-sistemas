const { model, Schema } = require('mongoose');

const clienteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
});
module.exports = model('clientes', clienteSchema);
