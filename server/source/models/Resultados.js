const { Schema, model } = require('mongoose');

const resultadoSchema = new Schema({
  clienteId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'clientes',
  },
  visaId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'visas',
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
  fechaResultado: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('resultados', resultadoSchema);
