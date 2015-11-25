"use stric";

var Pregunta = require('../models/preguntas.js');

function PSSimple(enunciado){
  Pregunta.call(this,enunciado);
  
}

module.exports = PSSimple;
