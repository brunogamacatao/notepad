const mongoose = require('mongoose');

// Abrindo a conexão com o banco
const connect = (callback) => {
  console.log('Conectando ao banco de dados ...');
  mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

  if (callback) {
    // Executar assim que o banco de dados estiver aberto
    mongoose.connection.once('open', callback);
  }
};

module.exports = {
  connect
};