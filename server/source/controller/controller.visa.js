const Visas = require('../models/Visas');
const Resultados = require('../models/Resultados');

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
    if (!req.files.length !== 4) {
      return res.status(400).json({
        msg: 'Se necesitan todos los documentos para el registro de la visa turista',
      });
    }

    req.files.forEach((file) => {
      if (!file.filename) {
        return res.status(400).json({
          msg: 'Todos los archivos son necesarios para el registro de la visa',
        });
      }
      if (
        file.mimetype !== 'image/jpeg' ||
        file.mimetype !== 'image/png' ||
        file.mimetype !== 'image/jpg'
      ) {
        return res.status(400).json({
          msg: 'El archivo enviado deben ser en formaro: JPG, JPEG o PNG',
        });
      }
    });
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
        msg: 'Error al crear la visa',
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
    if (!req.files.length !== 5) {
      return res.status(400).json({
        msg: 'Faltan documentos por subir para el registro de la visa empresarial',
      });
    }

    req.files.forEach((file) => {
      if (!file.filename) {
        return res.status(400).json({
          msg: 'Todos los archivos son necesarios para el registro de la visa empresarial',
        });
      }
      if (
        file.mimetype !== 'image/jpeg' ||
        file.mimetype !== 'image/png' ||
        file.mimetype !== 'image/jpg'
      ) {
        return res.status(400).json({
          msg: 'El archivo enviado deben ser en formaro: JPG, JPEG o PNG',
        });
      }
    });
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
    if (!req.files.length !== 5) {
      return res.status(400).json({
        msg: 'Faltan documentos por subir para el registro de la visa diplomatica',
      });
    }

    req.files.forEach((file) => {
      if (!file.filename) {
        return res.status(400).json({
          msg: 'Todos los archivos son necesarios para el registro de la visa diplomatica',
        });
      }
      if (
        file.mimetype !== 'image/jpeg' ||
        file.mimetype !== 'image/png' ||
        file.mimetype !== 'image/jpg'
      ) {
        return res.status(400).json({
          msg: 'El archivo enviado deben ser en formaro: JPG, JPEG o PNG',
        });
      }
    });
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
      const solicitudes = await Visas.find();
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
      }).populate('visaId');
      if (!resultados.length) {
        return res.status(404).json({
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
    const {
      clienteId,
      visaId,
      aprobado,
      fechaCita,
      horaCita,
      comentario,
      direccion,
    } = req.body;
    if (!clienteId || !visaId || !aprobado) {
      return res.status(400).json({
        msg: 'Todos los campos son obligatorios para definir la solicitud de la visa',
      });
    }
    try {
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
};
