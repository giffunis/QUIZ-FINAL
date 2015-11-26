"use stric";

var Pregunta = require('../models/preguntas.js');

function PCorta(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = '../../partials/preguntas/pCorta';
  this.tipo = "PCorta";
}

module.exports = PCorta;
