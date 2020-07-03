"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscription = exports.subscriptionsByUser = exports.subscriptions = void 0;

var _graphql = require("graphql");

var _types = _interopRequireDefault(require("./types"));

var _resolvers = require("./resolvers");

// Imports
// App Imports
// Subscriptions All
var subscriptions = {
  type: new _graphql.GraphQLList(_types["default"]),
  resolve: _resolvers.getAll
}; // Subscriptions by user

exports.subscriptions = subscriptions;
var subscriptionsByUser = {
  type: new _graphql.GraphQLList(_types["default"]),
  resolve: _resolvers.getByUser
}; // Subscription By id

exports.subscriptionsByUser = subscriptionsByUser;
var subscription = {
  type: _types["default"],
  args: {
    id: {
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.get
};
exports.subscription = subscription;
//# sourceMappingURL=query.js.map