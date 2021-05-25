const mongoose = require('mongoose');

// Crio o schema
const notepadSchema = new mongoose.Schema({
  identificador: String,
  texto: String
}, { 
  timestamps: true 
});

// Crio e exporto o modelo
module.exports = mongoose.model('Notepad', notepadSchema);