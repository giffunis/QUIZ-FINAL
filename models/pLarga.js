"use stric";

var Pregunta = require('../models/preguntas.js');

function PLarga(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<textarea name='respuesta' rows='2' cols='40' placeholder='Responda aquí'></textarea>";
  this.tipo = "PLarga";
}

module.exports = PLarga;
