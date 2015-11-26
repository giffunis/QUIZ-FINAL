"use stric";

var Pregunta = require('../models/preguntas.js');

function PSMultiple(enunciado, arrayResp){
  Pregunta.call(this,enunciado);
  this.arrayResp = arrayResp;
  this.entrada = '../../partials/preguntas/pMultiple';
  this.tipo = "PSMultiple";
}

module.exports = PSMultiple;
