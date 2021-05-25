// importar variáveis de ambiente do arquivo .env
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./db');

// 1. Vou me conectar ao banco de dados
db.connect(() => { // quando eu me conectar
  const app = express(); // crio a aplicação web

  // Configurando a aplicação
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());

  // Configurar as rotas da minha aplicação
  app.use(require('./controllers/notepad_controller'));
  
  const serverPort = parseInt(process.env.SERVER_PORT);
  
  app.listen(serverPort, () => {
    console.log('A aplicação está no ar');
    console.log(`http://localhost:${serverPort}`);
  });  
});
