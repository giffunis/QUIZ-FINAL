"use stric";

function Respuesta(respuesta){

 var f;
  if(typeof(respuesta) === 'string' || typeof(respuesta) === 'number') {
    f =  function(x){return x === respuesta;};
  }else if (respuesta.__proto__.toString() === '/(?:)/') {
    // var aux = this.respuesta;
    f =  function(x){return x.match(respuesta);};
  }else if (respuesta instanceof Array) {
    f = function(x){
      if(respuesta.length == x.length){ // si el tamaño de los array son iguales
        var correcta = 0;
        for(var i = 0; i < respuesta.length; i++){
          if(x[i] === respuesta[i])
            correcta++;
        }
        if(correcta == respuesta.length)
          return true;
        return false;
      }// si el tamaño de los array NO coinciden.
      return false;
    };
  }else  {
    f =  respuesta;
  }

  f.__proto__ = this.__proto__;
  return f;
}


module.exports = Respuesta;
