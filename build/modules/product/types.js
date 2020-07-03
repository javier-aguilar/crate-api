"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductTypesType = exports.ProductType = void 0;

var _graphql = require("graphql");

// Imports
// Product type
var ProductType = new _graphql.GraphQLObjectType({
  name: 'product',
  description: 'Product Type',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt
      },
      name: {
        type: _graphql.GraphQLString
      },
      slug: {
        type: _graphql.GraphQLString
      },
      type: {
        type: _graphql.GraphQLInt
      },
      gender: {
        type: _graphql.GraphQLInt
      },
      description: {
        type: _graphql.GraphQLString
      },
      image: {
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
}); // User Gender type

exports.ProductType = ProductType;
var ProductTypesType = new _graphql.GraphQLObjectType({
  name: 'productTypesType',
  description: 'User Types Type',
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
exports.ProductTypesType = ProductTypesType;
//# sourceMappingURL=types.js.map