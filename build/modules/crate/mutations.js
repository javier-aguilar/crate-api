"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crateRemove = exports.crateUpdate = exports.crateCreate = void 0;

var _graphql = require("graphql");

var _types = _interopRequireDefault(require("./types"));

var _resolvers = require("./resolvers");

// Imports
// App Imports
// Crate create
var crateCreate = {
  type: _types["default"],
  args: {
    name: {
      name: 'name',
      type: _graphql.GraphQLString
    },
    description: {
      name: 'description',
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.create
}; // Crate update

exports.crateCreate = crateCreate;
var crateUpdate = {
  type: _types["default"],
  args: {
    id: {
      name: 'id',
      type: _graphql.GraphQLInt
    },
    name: {
      name: 'name',
      type: _graphql.GraphQLString
    },
    description: {
      name: 'description',
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.update
}; // Crate remove

exports.crateUpdate = crateUpdate;
var crateRemove = {
  type: _types["default"],
  args: {
    id: {
      name: 'id',
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.remove
};
exports.crateRemove = crateRemove;
//# sourceMappingURL=mutations.js.map