const express = require('express');
const app = express();

const PORT = 3000;

//app escutar a porta//
app.listen(PORT, function(){
  console.log(`O Express está rodando na porta ${PORT}`);
});

//rota//
app.get('/', (req, res) =>{
  res.send("Está funcionando!");
})