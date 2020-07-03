"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _graphql = require("graphql");

var user = _interopRequireWildcard(require("../../modules/user/mutations"));

var product = _interopRequireWildcard(require("../../modules/product/mutations"));

var crate = _interopRequireWildcard(require("../../modules/crate/mutations"));

var subscription = _interopRequireWildcard(require("../../modules/subscription/mutations"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Mutation
var mutation = new _graphql.GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',
  fields: _objectSpread({}, user, {}, product, {}, crate, {}, subscription)
});
var _default = mutation;
exports["default"] = _default;
//# sourceMappingURL=mutations.js.map