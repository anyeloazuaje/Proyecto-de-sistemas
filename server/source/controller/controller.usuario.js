const Usuario = require('../models/Usuario');
const { protegerClave, compararClave } = require('../utils/hashClave');
const { crearToken } = require('../utils/token');
module.exports = {
  loginUsuario: async (req, res) => {
    const { usuario, clave } = req.body;
    if (!usuario || !clave) {
      return res.status(500).json({ msg: 'Debes enviar todos los datos.' });
    }
    try {
      const usuarioAdmin = await Usuario.findOne({ usuario });
      if (!usuarioAdmin) {
        return res.status(400).json({ msg: 'El usuario no existe.' });
      }
      const claveCorrecta = await compararClave(clave, usuarioAdmin.clave);
      if (claveCorrecta) {
        const token = crearToken({ id: usuario._id, nombre: usuario.nombre });
        return res
          .status(200)
          .json({ msg: 'Usuario logueado correctamente.', token });
      } else {
        res.status(400).json({ msg: 'La clave es incorrecta.' });
      }
    } catch (error) {
      res.status(500).json({ msg: 'Ocurrió un error logueando el usuario.' });
    }
  },
  registroUsuario: async (req, res) => {
    try {
      const { nombre, usuario, clave } = req.body;
      if (!nombre || !usuario || !clave) {
        return res.status(500).json({ msg: 'Todos los datos son requeridos.' });
      }
      const usuarioRegistrado = await Usuario.findOne({ usuario });
      if (usuarioRegistrado) {
        return res
          .status(400)
          .json({ msg: 'Este usuario ya se encuentra registrado.' });
      }
      const usuarioRegistro = new Usuario({
        nombre,
        usuario,
        clave: await protegerClave(clave),
      });
      const usuarioCreado = await usuarioRegistro.save();
      if (usuarioCreado) {
        return res.status(201).json({
          msg: 'Usuario creado correctamente',
        });
      } else {
        res.status(400).json({ msg: 'No se pudo registrar el usuario.' });
      }
    } catch (e) {
      res.status(500).json({ msg: 'Ocurrió un error registrando el usuario.' });
    }
  },
};
