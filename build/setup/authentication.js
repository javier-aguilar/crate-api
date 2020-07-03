"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _server = _interopRequireDefault(require("../config/server.json"));

// Imports
// Authentication middleware
function _default(request, response, next) {
  var authToken = request.headers.authorization;

  if (authToken && authToken !== null) {
    try {
      var token = authToken.split(' ');
      request.user = _jsonwebtoken["default"].verify(token[1], _server["default"].secret);
    } catch (e) {
      console.warn('Invalid token detected.');
    }
  } else {
    request.user = {};
  }

  next();
}
//# sourceMappingURL=authentication.js.map