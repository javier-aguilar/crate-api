"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var _queries = _interopRequireDefault(require("./queries"));

var _mutations = _interopRequireDefault(require("./mutations"));

// Imports
// App Imports
// Schema
var schema = new _graphql.GraphQLSchema({
  query: _queries["default"],
  mutation: _mutations["default"]
});
var _default = schema;
exports["default"] = _default;
//# sourceMappingURL=index.js.map