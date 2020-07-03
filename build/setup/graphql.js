"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _server = _interopRequireDefault(require("../config/server.json"));

var _authentication = _interopRequireDefault(require("./authentication"));

var _schema = _interopRequireDefault(require("./schema"));

// Imports
// App Imports
// Setup GraphQL
function _default(server) {
  console.info('SETUP - GraphQL...');
  server.use(_authentication["default"]); // API (GraphQL on route `/`)

  server.use(_server["default"].graphql.endpoint, (0, _expressGraphql["default"])(function (request) {
    return {
      schema: _schema["default"],
      graphiql: _server["default"].graphql.ide,
      pretty: _server["default"].graphql.pretty,
      context: {
        auth: {
          user: request.user,
          isAuthenticated: request.user && request.user.id > 0
        }
      }
    };
  }));
}
//# sourceMappingURL=graphql.js.map