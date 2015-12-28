
module.exports = function(sequelize, DataTypes){
  // sequelize.define(table_name, estructura);
  return sequelize.define('Comment',
  { texto: {
      type:   DataTypes.STRING,
      validate: { notEmpty: {msg: "Falta el comentario"}}
    }
  });
};
