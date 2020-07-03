"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userGenders = exports.userLogin = exports.user = exports.users = void 0;

var _graphql = require("graphql");

var _types = require("./types");

var _resolvers = require("./resolvers");

// Imports
// App Imports
// All
var users = {
  type: new _graphql.GraphQLList(_types.UserType),
  resolve: _resolvers.getAll
}; // By ID

exports.users = users;
var user = {
  type: _types.UserType,
  args: {
    id: {
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.getById
}; // Auth

exports.user = user;
var userLogin = {
  type: _types.UserLoginType,
  args: {
    email: {
      name: 'email',
      type: _graphql.GraphQLString
    },
    password: {
      name: 'password',
      type: _graphql.GraphQLString
    },
    role: {
      name: 'role',
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.login
}; // Genders

exports.userLogin = userLogin;
var userGenders = {
  type: new _graphql.GraphQLList(_types.UserGenderType),
  resolve: _resolvers.getGenders
};
exports.userGenders = userGenders;
//# sourceMappingURL=query.js.map