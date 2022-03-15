const Sequelize = require('sequelize');
const db = require('../db/connection');

//Criar model com método chamado define do sequelize//
const Job = db.define('job', {
  title: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email:{
    type: Sequelize.STRING,
  },
  new_job:{
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.STRING,
  },
  createdAt:{
    type: Sequelize.STRING,
  },
  updateAt: {
    type: Sequelize.STRING,
  }
});

module.exports = Job
