"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_URL = exports.PORT = exports.NODE_ENV = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

// Imports
// Load .env
_dotenv["default"].config(); // Environment


var NODE_ENV = process.env.NODE_ENV; // Port

exports.NODE_ENV = NODE_ENV;
var PORT = process.env.PORT || 8000; // DB URL

exports.PORT = PORT;
var DATABASE_URL = process.env.DATABASE_URL;
exports.DATABASE_URL = DATABASE_URL;
//# sourceMappingURL=env.js.map