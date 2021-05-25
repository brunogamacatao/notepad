const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const Notepad = require('../models/notepad');

router.get('/', (req, res) => {
  // quando o usuário não passar o id de um notepad, eu gero um
  // aleatoriamente e rediciono para esse id
  let id = uuid.v4()
  id = id.split('-')[0];
  res.redirect(`/${id}`);
});

router.get('/:id', async (req, res) => {
  // devo procurar no banco por um notepad com esse id
  // se tiver eu retorno, se não tiver eu crio um novo
  let notepad = await Notepad.findOne({identificador: req.params.id});

  if (!notepad) { // ele não encontrou um notepad no banco com o id
    notepad = await Notepad({identificador: req.params.id, texto: ''}).save();
  }

  res.json(notepad);
});

router.post('/:id', async (req, res) => {
  let notepad = await Notepad.findOne({identificador: req.params.id});
  
  notepad.texto = req.body.texto;
  notepad.save();

  res.json(notepad);
});

module.exports = router;