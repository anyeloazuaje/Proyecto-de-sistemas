const Cliente = require('../models/Clientes');
const jwt = require('jsonwebtoken');
const { protegerClave, compararClave } = require('../utils/hashClave');
const { crearToken } = require('../utils/token');
module.exports = {
  registroCliente: async (req, res) => {
    const { nombre, apellido, correo, clave } = req.body;
    if (!nombre || !correo || !clave || !apellido) {
      return res.status(500).json({ msg: 'Debes enviar todos los datos.' });
    }
    try {
      const cliente = await Cliente.findOne({ correo });
      if (cliente) {
        return res
          .status(400)
          .json({ msg: 'Ya existe un cliente con el correo especificado.' });
      }
      const claveHasheada = await protegerClave(clave);
      const clienteRegistrado = new Cliente({
        nombre,
        apellido,
        correo,
        clave: claveHasheada,
      });
      const result = await clienteRegistrado.save();
      if (result) {
        return res
          .status(201)
          .json({ msg: 'Cliente registrado correctamente.' });
      }
      res.status(400).json({ msg: 'No se pudo registrar el cliente.' });
    } catch (error) {
      res.status(500).json({ msg: 'Ocurrió un error registrando el cliente' });
    }
  },
  loginCliente: async (req, res) => {
    const { correo, clave } = req.body;
    if (!correo || !clave) {
      return res.status(500).json({ msg: 'Debes enviar todos los datos.' });
    }
    try {
      const cliente = await Cliente.findOne({ correo });
      if (!cliente) {
        return res.status(400).json({ msg: 'El cliente no existe.' });
      }
      const claveCorrecta = await compararClave(clave, cliente.clave);
      if (claveCorrecta) {
        const token = crearToken({
          id: cliente._id,
          nombre: cliente.nombre,
        });
        return res
          .status(200)
          .json({ msg: 'Cliente logueado correctamente.', token });
      } else {
        res.status(400).json({ msg: 'La clave es incorrecta.' });
      }
    } catch (error) {
      res.status(500).json({ msg: 'Ocurrió un error logueando el cliente.' });
    }
  },
};
