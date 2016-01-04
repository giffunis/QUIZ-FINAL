var models = require('../models/models.js');

module.exports = function(sequelize, DataTypes){
  // sequelize.define(table_name, estructura);
  return sequelize.define('User',{
    username: {
      type: DataTypes.STRING,
      validate: { notEmpty: {msg: "El nombre de usuario no puede estár vacío."},
                  isUnique: function(value, next) {
                    models.User.find({where: {username: value}}).then(function(user) {
                      if (user)
                        return next('¡El nombre de usuario se encuentra en uso!');
                      next();
                    }).catch(function(error){
                      next(error);
                    });
                  }
                }
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
