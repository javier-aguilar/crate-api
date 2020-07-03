"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = _interopRequireDefault(require("./database"));

// Imports
// App Imports
var models = {
  User: _database["default"]["import"]('../modules/user/model'),
  Product: _database["default"]["import"]('../modules/product/model'),
  Crate: _database["default"]["import"]('../modules/crate/model'),
  Subscription: _database["default"]["import"]('../modules/subscription/model')
};
Object.keys(models).forEach(function (modelName) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
models.sequelize = _database["default"];
models.Sequelize = _sequelize["default"];
var _default = models;
exports["default"] = _default;
//# sourceMappingURL=models.js.map