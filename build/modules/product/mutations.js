"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productRemove = exports.productUpdate = exports.productCreate = void 0;

var _graphql = require("graphql");

var _types = require("./types");

var _resolvers = require("./resolvers");

// Imports
// App Imports
// Product create
var productCreate = {
  type: _types.ProductType,
  args: {
    name: {
      name: 'name',
      type: _graphql.GraphQLString
    },
    slug: {
      name: 'slug',
      type: _graphql.GraphQLString
    },
    description: {
      name: 'description',
      type: _graphql.GraphQLString
    },
    type: {
      name: 'type',
      type: _graphql.GraphQLInt
    },
    gender: {
      name: 'gender',
      type: _graphql.GraphQLInt
    },
    image: {
      name: 'image',
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.create
}; // Product update

exports.productCreate = productCreate;
var productUpdate = {
  type: _types.ProductType,
  args: {
    id: {
      name: 'id',
      type: _graphql.GraphQLInt
    },
    name: {
      name: 'name',
      type: _graphql.GraphQLString
    },
    slug: {
      name: 'slug',
      type: _graphql.GraphQLString
    },
    description: {
      name: 'description',
      type: _graphql.GraphQLString
    },
    type: {
      name: 'type',
      type: _graphql.GraphQLInt
    },
    gender: {
      name: 'gender',
      type: _graphql.GraphQLInt
    },
    image: {
      name: 'image',
      type: _graphql.GraphQLString
    }
  },
  resolve: _resolvers.update
}; // Product remove

exports.productUpdate = productUpdate;
var productRemove = {
  type: _types.ProductType,
  args: {
    id: {
      name: 'id',
      type: _graphql.GraphQLInt
    }
  },
  resolve: _resolvers.remove
};
exports.productRemove = productRemove;
//# sourceMappingURL=mutations.js.map