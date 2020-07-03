"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

// Imports
// Crate type
var CrateType = new _graphql.GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt
      },
      name: {
        type: _graphql.GraphQLString
      },
      description: {
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
});
var _default = CrateType;
exports["default"] = _default;
//# sourceMappingURL=types.js.map