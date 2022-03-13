//Chamar o sequelize que vai fazer as interações com o banco//
const Sequelize = require('sequelize');

//Fazer conexão com o banco//
//instanciar//
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
});

//exportando//
module.exports = sequelize
