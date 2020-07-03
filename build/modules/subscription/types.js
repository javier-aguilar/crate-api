"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var _types = require("../user/types");

var _types2 = _interopRequireDefault(require("../crate/types"));

// Imports
// App Imports
// Subscription type
var SubscriptionType = new _graphql.GraphQLObjectType({
  name: 'subscription',
  description: 'Subscription Type',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt
      },
      user: {
        type: _types.UserType
      },
      crate: {
        type: _types2["default"]
      },
      createdAt: {
        type: _graphql.GraphQLString
      },
      updatedAt: {
        type: _graphql.GraphQLString
      }
    };
  }
});
var _default = SubscriptionType;
exports["default"] = _default;
//# sourceMappingURL=types.js.map