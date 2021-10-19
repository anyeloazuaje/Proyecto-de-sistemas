const mongoose = require('mongoose');

const conexion = async function () {
  try {
    await mongoose.connect(process.env.CONEXION_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexion a la base de datos exitosa');
  } catch (error) {
    console.log('Error al conectar a la base de datos');
  }
};
module.exports = { conexion };
