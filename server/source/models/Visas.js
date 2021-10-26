const { Schema, model } = require('mongoose');

const visaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  identificacion: {
    type: Number,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
    enum: ['Masculino', 'Femenino'],
  },
  edad: {
    type: Number,
    required: true,
  },
  fecha_nacimiento: {
    type: String,
    required: true,
  },
  clienteId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  tipoVisa: {
    type: String,
    required: true,
    enum: ['Turista', 'Negocios', 'Diplomatica'],
  },
  urlIdentidad: {
    type: String,
    required: true,
  },
  urlPasaporte: {
    type: String,
    required: true,
  },
  urlFondo: {
    type: String,
    required: true,
  },
  urlFactura: {
    type: String,
    required: true,
  },
  urlCartaDiplomatica: {
    type: String,
    required: false,
  },
  urlCartaEmpresarial: {
    type: String,
    required: false,
  },
  estado: {
    type: String,
    required: true,
    enum: ['Pendiente', 'Aprobado', 'Rechazado'],
    default: 'Pendiente',
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('visas', visaSchema);
