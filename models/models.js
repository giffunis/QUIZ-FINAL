var path = require('path');

// Cargar el modelo ORM
var Sequelize = require('sequelize');

// Usar la BBDD SQLite, este es el objeto personalizado:
var sequelize = new Sequelize(null, null, null,
                        {dialect: "sqlite", storage: "quiz.sqlite"}
                      );

// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));
// Se ha creado un objeto de tipo Quiz que permite acceder a los objetos de la tabla.

exports.Quiz = Quiz; // exportar la definición de la tabla Quiz.

// Crear e inicializar la tabla de preguntas.
// Para ello se sincroniza las definiciones del modelo.
sequelize.sync().success(function(){
  Quiz.count().success(function (count){
    if (count === 0) { // se inicializa si la tabla está vacía.
      Quiz.create({ pregunta: 'Capital de Italia',
                    respuesta: 'Roma'
                  });
    }
  });
});
