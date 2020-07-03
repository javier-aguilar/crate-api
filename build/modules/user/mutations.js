"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRemove = exports.userSignup = void 0;

var _graphql = require("graphql");

var _types = require("./types");

var _resolvers = require("./resolvers");

// Imports
// App Imports
// Create
var userSignup = {
  type: _types.UserType,
  args: {
    name: {
      name: 'name',
      type: _graphql.GraphQLString
    },
    email: {
      name: 'email',
      type: _graphql.GraphQLString
    },
    password: {
      name: 'password',
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.create
}; // Remove

exports.userSignup = userSignup;
var userRemove = {
  type: _types.UserType,
  args: {
    id: {
      name: 'id',
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.remove
};
exports.userRemove = userRemove;
//# sourceMappingURL=mutations.js.map