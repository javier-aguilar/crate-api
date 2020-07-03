"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productTypes = exports.productsRelated = exports.productById = exports.product = exports.products = void 0;

var _graphql = require("graphql");

var _types = require("./types");

var _resolvers = require("./resolvers");

// Imports
// App Imports
// Products All
var products = {
  type: new _graphql.GraphQLList(_types.ProductType),
  resolve: _resolvers.getAll
}; // Product By slug

exports.products = products;
var product = {
  type: _types.ProductType,
  args: {
    slug: {
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.getBySlug
}; // Product By ID

exports.product = product;
var productById = {
  type: _types.ProductType,
  args: {
    productId: {
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.getById
}; // Products Related

exports.productById = productById;
var productsRelated = {
  type: new _graphql.GraphQLList(_types.ProductType),
  args: {
    productId: {
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.getRelated
}; // Product Types

exports.productsRelated = productsRelated;
var productTypes = {
  type: new _graphql.GraphQLList(_types.ProductTypesType),
  resolve: _resolvers.getTypes
};
exports.productTypes = productTypes;
//# sourceMappingURL=query.js.map