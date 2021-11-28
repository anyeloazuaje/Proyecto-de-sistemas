const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  esAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = model('usuario', usuarioSchema);
