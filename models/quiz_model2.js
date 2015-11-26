var AbstractQuiz = require('../models/abstract_quiz_model.js');
var PCorta = require('../models/pCorta.js');
var PLarga = require('../models/pLarga.js');
var Respuesta = require('../models/respuesta.js');
var PSSimple = require('../models/pSeleccionSimple.js');
var PSMultiple = require('../models/pSeleccionMultiple.js');


function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(

    { pregunta: new PCorta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },

    { pregunta: new PLarga('¿Quien reinaba en España cuando se descubrió América?'),
      respuesta: new Respuesta(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)|(reyes\s+cat[oó]licos)\b/i)
    },

    { pregunta: new PSSimple('¿Capital de Grecia?',['Madrid', 'Roma', 'Atenas']),
      respuesta: new Respuesta('Atenas')
    },

    { pregunta: new PSMultiple('¿Que animales son mamíferos?',['Ornitorrinco', 'Canguro', 'Ballena', 'Gato']),
      respuesta: new Respuesta(['Ballena', 'Gato'])
    },

    { pregunta: new PLarga('Escriba una función JavaScript de nombre <tt>square</tt> '+
    'que recibe un número y devuelve el cuadrado'),
      respuesta: new Respuesta(function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }catch(e) {
          return false;
        }
        return false;
      })
    }

  );

  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      // debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      // debug("n2 = "+n2);
      self.q.push(
        { pregunta: new PCorta('¿ '+n1+'x'+n2+"= ?"),
          respuesta: new Respuesta(function(x) {
            // debug("n1 = "+n1);
            // debug("n2 = "+n2);
            return (x == n1*n2);
        })
      });
    })();
  }

}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
