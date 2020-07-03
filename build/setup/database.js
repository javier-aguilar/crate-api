"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _env = require("../config/env");

var _database = _interopRequireDefault(require("../config/database.json"));

// Imports
// App Imports
// Load database config
var databaseConfigEnv = _database["default"][_env.NODE_ENV]; // Create new database connection

var connection = new _sequelize.Sequelize(databaseConfigEnv.database, databaseConfigEnv.username, databaseConfigEnv.password, {
  host: databaseConfigEnv.host,
  dialect: databaseConfigEnv.dialect,
  logging: false
}); // Test connection

console.info('SETUP - Connecting database...');
connection.authenticate().then(function () {
  console.info('INFO - Database connected.');
})["catch"](function (err) {
  console.error('ERROR - Unable to connect to the database:', err);
});
var _default = connection;
exports["default"] = _default;
//# sourceMappingURL=database.js.map