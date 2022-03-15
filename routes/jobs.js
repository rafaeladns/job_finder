const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

//rota de teste//
router.get('/test', (req, res) =>{
   res.send('deu certo');
});

//add job via post
router.post('/add', (req, res) =>{
  
  let {title, salary, company, email, new_job, description, createdAt, updateAt} = req.body;

  //inserir dados
  Job.create({
    title,
    salary,
    company,
    email,
    new_job,
    description,
    createdAt,
    updateAt,
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));
});

module.exports = router