"use stric";

var Pregunta = require('../models/preguntas.js');

function PLarga(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = '../../partials/preguntas/pLarga';
  this.tipo = "PLarga";
}

module.exports = PLarga;
