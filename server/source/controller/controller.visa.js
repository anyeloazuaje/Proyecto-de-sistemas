const Visas = require('../models/Visas');
const Resultados = require('../models/Resultados');
const { TIPO_EXTENSIONES } = require('../utils/subirArchivos');
module.exports = {
  crearVisaTurista: async (req, res) => {
    const {
      nombre,
      apellido,
      identificacion,
      sexo,
      edad,
      fecha_nacimiento,
      tipoVisa,
    } = req.body;
    if (
      !nombre ||
      !apellido ||
      !identificacion ||
      !sexo ||
      !edad ||
      !fecha_nacimiento ||
      !tipoVisa
    ) {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios.',
      });
    }
    if (req.files.length !== 4) {
      return res.status(400).json({
        msg: 'Se necesitan todos los documentos para el registro de la visa turista',
      });
    }
    const errors = [];
    req.files.forEach((file) => {
      if (!file.filename) {
        errors.push('filename');
      }
      if (!TIPO_EXTENSIONES[file.mimetype]) {
        errors.push('mimetype');
      }
    });
    if (errors.length > 0) {
      return res.status(400).json({
        msg: 'El archivo enviado deben ser en formaro: JPG, JPEG o PNG',
      });
    }
    const visaEncontrada = await Visas.findOne({ identificacion });
    if (visaEncontrada) {
      return res.status(400).json({
        msg: 'Ya existe una solicitud de visa registrada con esta identificación',
      });
    }
    const [urlIdentidad, urlPasaporte, urlFondo, urlFactura] = req.files;
    try {
      const visa = new Visas({
        clienteId: req.cliente.id,
        nombre,
        apellido,
        identificacion,
        sexo,
        edad,
        fecha_nacimiento,
        tipoVisa,
        urlIdentidad: urlIdentidad.filename,
        urlPasaporte: urlPasaporte.filename,
        urlFondo: urlFondo.filename,
        urlFactura: urlFactura.filename,
      });
      const visaAlmacenada = await visa.save();
      if (visaAlmacenada) {
        return res.status(201).json({
          msg: 'Solicitud de visa turista registrada con éxito',
          visa,
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: 'Ocurrió un error creando la visa',
      });
    }
  },
  crearVisaEmpresarial: async (req, res) => {
    const {
      nombre,
      apellido,
      identificacion,
      sexo,
      edad,
      fecha_nacimiento,
      tipoVisa,
    } = req.body;
    if (
      !nombre ||
      !apellido ||
      !identificacion ||
      !sexo ||
      !edad ||
      !fecha_nacimiento ||
      !tipoVisa
    ) {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios.',
      });
    }
    if (req.files.length !== 5) {
      return res.status(400).json({
        msg: 'Faltan documentos por subir para el registro de la visa empresarial',
      });
    }

    const errors = [];
    req.files.forEach((file) => {
      if (!file.filename) {
        errors.push('filename');
      }
      if (!TIPO_EXTENSIONES[file.mimetype]) {
        errors.push('mimetype');
      }
    });
    if (errors.length > 0) {
      return res.status(400).json({
        msg: 'El archivo enviado deben ser en formaro: JPG, JPEG o PNG',
      });
    }
    const visaEncontrada = await Visas.findOne({ identificacion });
    if (visaEncontrada) {
      return res.status(400).json({
        msg: 'Ya existe una solicitud de visa registrada con esta identificación',
      });
    }
    const [
      urlIdentidad,
      urlPasaporte,
      urlFondo,
      urlFactura,
      urlCartaEmpresarial,
    ] = req.files;
    try {
      const visaEmpresarial = new Visas({
        clienteId: req.cliente.id,
        nombre,
        apellido,
        identificacion,
        sexo,
        edad,
        fecha_nacimiento,
        tipoVisa,
        urlIdentidad: urlIdentidad.filename,
        urlPasaporte: urlPasaporte.filename,
        urlFondo: urlFondo.filename,
        urlFactura: urlFactura.filename,
        urlCartaEmpresarial: urlCartaEmpresarial.filename,
      });
      const visaEmpresarialAlmacenada = await visaEmpresarial.save();
      if (visaEmpresarialAlmacenada) {
        return res.status(201).json({
          msg: 'Solicitud de visa empresarial registrada con éxito',
          visaEmpresarial,
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al crear la visa',
      });
    }
  },
  crearVisaDiplomatica: async (req, res) => {
    const {
      nombre,
      apellido,
      identificacion,
      sexo,
      edad,
      fecha_nacimiento,
      tipoVisa,
    } = req.body;
    if (
      !nombre ||
      !apellido ||
      !identificacion ||
      !sexo ||
      !edad ||
      !fecha_nacimiento ||
      !tipoVisa
    ) {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios.',
      });
    }

    if (req.files.length !== 5) {
      return res.status(400).json({
        msg: 'Faltan documentos por subir para el registro de la visa diplomatica',
      });
    }
    const errors = [];
    req.files.forEach((file) => {
      if (!file.filename) {
        errors.push('filename');
      }
      if (!TIPO_EXTENSIONES[file.mimetype]) {
        errors.push('mimetype');
      }
    });
    if (errors.length > 0) {
      return res.status(400).json({
        msg: 'El archivo enviado deben ser en formaro: JPG, JPEG o PNG',
      });
    }
    const visaEncontrada = await Visas.findOne({ identificacion });
    if (visaEncontrada) {
      return res.status(400).json({
        msg: 'Ya existe una solicitud de visa registrada con esta identificación',
      });
    }
    const [
      urlIdentidad,
      urlPasaporte,
      urlFondo,
      urlFactura,
      urlCartaDiplomatica,
    ] = req.files;
    try {
      const visaDiplomatica = new Visas({
        clienteId: req.cliente.id,
        nombre,
        apellido,
        identificacion,
        sexo,
        edad,
        fecha_nacimiento,
        tipoVisa,
        urlIdentidad: urlIdentidad.filename,
        urlPasaporte: urlPasaporte.filename,
        urlFondo: urlFondo.filename,
        urlFactura: urlFactura.filename,
        urlCartaDiplomatica: urlCartaDiplomatica.filename,
      });
      const visaDiplomaticaRegistrada = await visaDiplomatica.save();
      if (visaDiplomaticaRegistrada) {
        return res.status(201).json({
          msg: 'Solicitud de visa diplomatica registrada con éxito',
          visaDiplomatica,
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al crear la visa',
      });
    }
  },
  detallesSolicitudVisa: async (req, res) => {
    try {
      const visa = await Visas.findById(req.params.visaId);
      if (!visa) {
        return res.status(404).json({
          msg: 'El id no esta corresponde a ninguna solicitud de visa',
        });
      }
      return res.status(200).json({
        msg: 'Detalles de la solicitud visa',
        visa,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al obtener la solicitud de  visa',
      });
    }
  },
  solicitudesVisas: async (req, res) => {
    try {
      const solicitudes = await Visas.find({ estado: 'Pendiente' }).populate(
        'clienteId'
      );
      if (!solicitudes) {
        return res.status(404).json({
          msg: 'No hay solicitudes de visa registradas',
        });
      }
      return res.status(200).json({
        msg: 'Solicitudes de visa',
        solicitudes,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al obtener las solicitudes de visa',
      });
    }
  },
  actualizarSolicitudVisa: async (req, res) => {
    const {
      nombre,
      apellido,
      identificacion,
      sexo,
      edad,
      fecha_nacimiento,
      tipoVisa,
    } = req.body;
    if (
      !nombre ||
      !apellido ||
      !identificacion ||
      !sexo ||
      !edad ||
      !fecha_nacimiento ||
      !tipoVisa
    ) {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios.',
      });
    }
    try {
      const visa = await Visas.findByIdAndUpdate(
        req.params.visaId,
        {
          nombre,
          apellido,
          identificacion,
          sexo,
          edad,
          fecha_nacimiento,
          tipoVisa,
        },
        { new: true }
      );
      if (!visa) {
        return res.status(404).json({
          msg: 'El id no esta corresponde a ninguna solicitud de visa',
        });
      }
      return res.status(200).json({
        msg: 'Solicitud de visa actualizada con éxito',
        visa,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al actualizar la solicitud de visa',
      });
    }
  },
  notificacionCliente: async (req, res) => {
    try {
      const resultados = await Resultados.find({
        clienteId: req.cliente.id,
      }).populate('visaId', 'tipoVisa');
      if (!resultados.length) {
        return res.status(200).json({
          msg: 'No hay resultados registrados',
          notificaciones: resultados,
        });
      }
      return res.status(200).json({
        msg: 'Resultados',
        notificaciones: resultados,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error obteniendo las notificaciones del cliente',
      });
    }
  },
  definirVisa: async (req, res) => {
    const { clienteId, aprobado, fechaCita, horaCita, comentario, direccion } =
      req.body;
    if (!clienteId || typeof aprobado !== 'boolean') {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios para definir la solicitud de la visa',
      });
    }
    try {
      const { visaId } = req.params;
      const visaDefinida = await Visas.find({
        id: visaId,
        estado: 'Pendiente',
      });
      if (visaDefinida) {
        return res.status(400).json({
          msg: 'Esta solicitud ya ha sido definida',
        });
      }
      //En caso la solicitud fue rechazada, actualiza el estado de la visa a rechazado y crea el resultado para el cliente con el resultado de la visa
      if (!aprobado) {
        const visa = await Visas.findByIdAndUpdate(
          visaId,
          {
            estado: 'Rechazado',
          },
          { new: true }
        );
        if (!visa) {
          return res.status(404).json({
            msg: 'El id no esta corresponde a ninguna solicitud de visa',
          });
        }
        const notificacion = new Resultados({
          clienteId,
          visaId,
          aprobado,
          comentario,
        });
        const notificacionCreada = await notificacion.save();
        if (notificacionCreada) {
          return res.status(201).json({
            msg: 'Solicitud de visa rechazada con éxito',
            notificacion,
          });
        }
      } else {
        //En caso la solicitud fue aprobada, actualiza el estado de la visa a aprobado y crea el resultado para el cliente
        const visa = await Visas.findByIdAndUpdate(
          visaId,
          {
            estado: 'Aprobado',
          },
          { new: true }
        );
        if (!visa) {
          return res.status(404).json({
            msg: 'El id no esta corresponde a ninguna solicitud de visa',
          });
        }
        const notificacion = new Resultados({
          clienteId,
          visaId,
          aprobado,
          fechaCita,
          horaCita,
          comentario,
          direccion,
        });
        const notificacionCreada = await notificacion.save();
        if (notificacionCreada) {
          return res.status(201).json({
            msg: 'Solicitud de visa aprobada con éxito',
            notificacion,
          });
        }
      }
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al definir la solicitud de la visa',
      });
    }
  },
  visasPendientesCliente: async (req, res) => {
    try {
      const visas = await Visas.find({
        estado: 'Pendiente',
        clienteId: req.cliente.id,
      });
      if (!visas.length) {
        return res.status(200).json({
          msg: 'No hay solicitudes de visa pendientes para el cliente',
          visasPendiente: [],
          tieneVisasPendiente: false,
        });
      }
      return res.status(200).json({
        msg: 'Solicitudes de visa pendientes',
        tieneVisasPendiente: true,
        visasPendiente: visas,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al obtener las solicitudes de visa pendientes',
      });
    }
  },
  eliminarVisaCliente: async (req, res) => {
    try {
      const visa = await Visas.findByIdAndDelete(req.params.id);
      if (!visa) {
        return res.status(404).json({
          msg: 'El id no esta corresponde a ninguna solicitud de visa',
        });
      }
      return res.status(200).json({
        msg: 'Solicitud de visa eliminada con éxito',
        visa,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al eliminar la solicitud de visa',
      });
    }
  },
};
