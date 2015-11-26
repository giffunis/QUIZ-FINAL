"use stric";

var Pregunta = require('../models/preguntas.js');

function PSSimple(enunciado, arrayResp){
  Pregunta.call(this,enunciado);
  this.arrayResp = arrayResp;
  this.entrada = "eval('<% include ../../partials/preguntas/pSimple %>')";
  this.tipo = "PSSimple";
}

module.exports = PSSimple;
