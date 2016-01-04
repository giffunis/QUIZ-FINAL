
module.exports = function(sequelize, DataTypes){
  // sequelize.define(table_name, estructura);
  return sequelize.define('User',{
    username: {
      type: DataTypes.STRING,
      validate: { notEmpty: {msg: "El nombre de usuario no puede estár vacío."}}
    },
    password: {
      type: DataTypes.STRING,
      validate: { notEmpty: {msg: "Falta la contraseña"}}
    },
    bestScore: {
      type: DataTypes.INTEGER
    }
  });
};
