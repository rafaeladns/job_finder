const Sequelize = require('sequelize');
const db = ('../db/connection');

//Criando model com método define do sequelize//
const Job = db.define('job', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  }, 
  email: {
    type: Sequelize.STRING,
  },
  new_Job: {
    type: Sequelize.INTEGER,
  }
});

//exportar//
module.exports = Job
