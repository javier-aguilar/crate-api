"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscriptionRemove = exports.subscriptionCreate = void 0;

var _graphql = require("graphql");

var _types = _interopRequireDefault(require("./types"));

var _resolvers = require("./resolvers");

// Imports
// App Imports
// Subscription create
var subscriptionCreate = {
  type: _types["default"],
  args: {
    crateId: {
      name: 'crateId',
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.create
}; // Subscription remove

exports.subscriptionCreate = subscriptionCreate;
var subscriptionRemove = {
  type: _types["default"],
  args: {
    id: {
      name: 'id',
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.remove
};
exports.subscriptionRemove = subscriptionRemove;
//# sourceMappingURL=mutations.js.map