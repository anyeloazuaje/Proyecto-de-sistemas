const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const server = express();
const { conexion } = require('./config/conexion');
const PUERTO = 3000;

server.use(logger('dev'));
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use('/api', require('./router/router'));
server.use('/imagenes', express.static(path.join(__dirname, 'public')));
server.use('/', express.static(path.join(__dirname, 'public/client')));
server.use('/admin', express.static(path.join(__dirname, 'public/admin')));

server.listen(PUERTO, async function () {
  console.log('Servidor en linea, puerto', PUERTO);
  await conexion();
});
