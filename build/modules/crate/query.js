"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crateById = exports.crates = void 0;

var _graphql = require("graphql");

var _types = _interopRequireDefault(require("./types"));

var _resolvers = require("./resolvers");

// Imports
// App Imports
// Crates All
var crates = {
  type: new _graphql.GraphQLList(_types["default"]),
  args: {
    orderBy: {
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.getAll
}; // Crate By ID

exports.crates = crates;
var crateById = {
  type: _types["default"],
  args: {
    crateId: {
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.getById
};
exports.crateById = crateById;
//# sourceMappingURL=query.js.map