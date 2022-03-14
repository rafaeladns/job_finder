const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser')

const PORT = 3000;

//app escutar a porta//
app.listen(PORT, function(){
  console.log(`O Express está rodando na porta ${PORT}`);
});

//utilizando body parser//
app.use(bodyParser.urlencoded({extended: false}));

//Conexão com o banco//
db
.authenticate()
.then(() =>{
  console.log("Conectou ao banco com sucesso!");
}) //sucesso da conexão com o banco//
.catch(err => {
  console.log("Ocorreu um  erro ao conectar", err);
}); //Mensagem de erro//


//rota//
app.get('/', (req, res) =>{
  res.send("Está funcionando!");
});

//jobs rotas//
app.use('/jobs', require('./routes/jobs'));