
module.exports = function(sequelize, DataTypes){
  // sequelize.define(table_name, estructura);
  return sequelize.define('Quiz',
  { pregunta:   DataTypes.STRING,
    respuesta:  DataTypes.STRING,
  });
};
