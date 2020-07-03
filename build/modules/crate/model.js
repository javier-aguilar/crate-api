'use strict';

module.exports = function (sequelize, DataTypes) {
  var Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  Crate.associate = function (models) {
    Crate.hasMany(models.Subscription);
  };

  return Crate;
};
//# sourceMappingURL=model.js.map