"use stric";

var Pregunta = require('../models/preguntas.js');

function PSMultiple(enunciado, arrayResp){
  Pregunta.call(this,enunciado);
  this.arrayResp = arrayResp;
  this.entrada = "<% include ../../partials/preguntas/pMultiple %>";
  this.tipo = "PSMultiple";
}

module.exports = PSMultiple;

// var self = this;
// EJS.renderFile(path, {options: options},
//   function(err, html){
//     if(err) throw err;
//     self._HTML = html;
//   });
