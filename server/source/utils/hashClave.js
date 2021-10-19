const bcrypt = require('bcrypt');

protegerClave = async (clave) => {
  const hashBrcrypt = await bcrypt.genSalt();
  const claveHasheada = await bcrypt.hash(clave, hashBrcrypt);
  return claveHasheada;
};
compararClave = async (claveComparar, claveHash) => {
  const esCorrecto = await bcrypt.compare(claveComparar, claveHash);
  return esCorrecto;
};
module.exports = {
    protegerClave,
    compararClave
}