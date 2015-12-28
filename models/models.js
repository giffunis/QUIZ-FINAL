var path = require('path');

// Para Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name   = (url[6]||null);
var user      = (url[2]||null);
var pwd       = (url[3]||null);
var protocol  = (url[1]||null);
var dialect   = (url[1]||null);
var port      = (url[5]||null);
var host      = (url[4]||null);
var storage   = process.env.DATABASE_STORAGE;

// Cargar el modelo ORM
var Sequelize = require('sequelize');

// Usar la BBDD SQLite, este es el objeto personalizado:
var sequelize = new Sequelize(DB_name, user, pwd,
                        { dialect: dialect,
                          protocol: protocol,
                          port: port,
                          host: host,
                          storage: storage, // Solo SQLite(.env)
                          omitNull: true    // Solo Postgres
                        }
                      );

// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));
var Comment = sequelize.import(path.join(__dirname,'comment'));

Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

exports.Quiz = Quiz; // exportar la definición de la tabla Quiz.
exports.Comment = Comment;




// Crear e inicializar la tabla de preguntas.
// Para ello se sincroniza las definiciones del modelo.
sequelize.sync().then(function(){
  Quiz.count().then(function (count){
    if (count === 0) { // se inicializa si la tabla está vacía.
      Quiz.create({ pregunta: 'Capital de Italia',
                    respuesta: 'Roma'
                  });
      Quiz.create({ pregunta: 'Capital de España',
                    respuesta: 'Madrid'
                  });
    }
  });
});
