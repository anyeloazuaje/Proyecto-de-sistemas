const { Schema, model } = require('mongoose');

const resultadoSchema = new Schema({
  clienteId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  visaId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  aprobado: {
    type: Boolean,
    required: true,
  },
  fechaCita: {
    type: String,
    required: false,
  },
  horaCita: {
    type: String,
    required: false,
  },
  comentario: {
    type: String,
    required: false,
  },
  direccion: {
    type: String,
    required: false,
  },
});

module.exports = model('resultados', resultadoSchema);
