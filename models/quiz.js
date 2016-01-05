
module.exports = function(sequelize, DataTypes){
  // sequelize.define(table_name, estructura);
  return sequelize.define('Quiz',
  { pregunta: {
      type:   DataTypes.STRING,
      validate: { notEmpty: {msg: "Falta la pregunta"}}
    },
    respuesta: {
      type: DataTypes.STRING,
      validate: { notEmpty: {msg: "Falta la respuesta"}}
    },
    tipo: {
      type: DataTypes.STRING,
      validate: { notEmpty: {msg: "Debe seleccionar un tipo de pregunta obligatoriamente"}}
    }
  });
};
