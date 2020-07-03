"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserGenderType = exports.UserLoginType = exports.UserType = void 0;

var _graphql = require("graphql");

// Imports
// User type
var UserType = new _graphql.GraphQLObjectType({
  name: 'user',
  description: 'User type',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt
      },
      name: {
        type: _graphql.GraphQLString
      },
      email: {
        type: _graphql.GraphQLString
      },
      password: {
        type: _graphql.GraphQLString
      },
      role: {
        type: _graphql.GraphQLString
      },
      createdAt: {
        type: _graphql.GraphQLString
      },
      updatedAt: {
        type: _graphql.GraphQLString
      }
    };
  }
}); // User Login type

exports.UserType = UserType;
var UserLoginType = new _graphql.GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',
  fields: function fields() {
    return {
      user: {
        type: UserType
      },
      token: {
        type: _graphql.GraphQLString
      }
    };
  }
}); // User Gender type

exports.UserLoginType = UserLoginType;
var UserGenderType = new _graphql.GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt
      },
      name: {
        type: _graphql.GraphQLString
      }
    };
  }
});
exports.UserGenderType = UserGenderType;
//# sourceMappingURL=types.js.map