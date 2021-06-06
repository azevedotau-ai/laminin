const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Consultor = require("../../models/Consultor/Consultor");

exports.authenticate = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Achar Consultor Usando o Email
      const user = await Consultor.findOne({ email });

      // Comparar a Senha
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) throw 'Senha Inválida';
        resolve(user);
      });
    } catch (err) {
      // Email not found 
      reject('Autenticação Falhou');
    }
  });
};
