"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.getBySlug = getBySlug;
exports.getById = getById;
exports.getRelated = getRelated;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.getTypes = getTypes;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../config/params"));

var _models = _interopRequireDefault(require("../../setup/models"));

// App Imports
// Get all products
function getAll() {
  return _getAll.apply(this, arguments);
} // Get product by slug


function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models["default"].Product.findAll({
              order: [['id', 'DESC']]
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAll.apply(this, arguments);
}

function getBySlug(_x, _x2) {
  return _getBySlug.apply(this, arguments);
} // Get product by ID


function _getBySlug() {
  _getBySlug = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parentValue, _ref) {
    var slug, product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            slug = _ref.slug;
            _context2.next = 3;
            return _models["default"].Product.findOne({
              where: {
                slug: slug
              }
            });

          case 3:
            product = _context2.sent;

            if (product) {
              _context2.next = 8;
              break;
            }

            throw new Error('The product you are looking for does not exists or has been discontinued.');

          case 8:
            return _context2.abrupt("return", product);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getBySlug.apply(this, arguments);
}

function getById(_x3, _x4) {
  return _getById.apply(this, arguments);
} // Get related products


function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parentValue, _ref2) {
    var productId, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            productId = _ref2.productId;
            _context3.next = 3;
            return _models["default"].Product.findOne({
              where: {
                id: productId
              }
            });

          case 3:
            product = _context3.sent;

            if (product) {
              _context3.next = 8;
              break;
            }

            throw new Error('The product you are looking for does not exists or has been discontinued.');

          case 8:
            return _context3.abrupt("return", product);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getById.apply(this, arguments);
}

function getRelated(_x5, _x6) {
  return _getRelated.apply(this, arguments);
} // Create product


function _getRelated() {
  _getRelated = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(parentValue, _ref3) {
    var productId;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            productId = _ref3.productId;
            _context4.next = 3;
            return _models["default"].Product.findAll({
              where: {
                id: (0, _defineProperty2["default"])({}, _models["default"].Sequelize.Op.not, productId)
              },
              limit: 3,
              order: [[_models["default"].Sequelize.fn('RAND')]] // mock related products by showing random products

            });

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getRelated.apply(this, arguments);
}

function create(_x7, _x8, _x9) {
  return _create.apply(this, arguments);
} // Update product


function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(parentValue, _ref4, _ref5) {
    var name, slug, description, type, gender, image, auth;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            name = _ref4.name, slug = _ref4.slug, description = _ref4.description, type = _ref4.type, gender = _ref4.gender, image = _ref4.image;
            auth = _ref5.auth;

            if (!(auth.user && auth.user.role === _params["default"].user.roles.admin)) {
              _context5.next = 8;
              break;
            }

            _context5.next = 5;
            return _models["default"].Product.create({
              name: name,
              slug: slug,
              description: description,
              type: type,
              gender: gender,
              image: image
            });

          case 5:
            return _context5.abrupt("return", _context5.sent);

          case 8:
            throw new Error('Operation denied.');

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _create.apply(this, arguments);
}

function update(_x10, _x11, _x12) {
  return _update.apply(this, arguments);
} // Delete product


function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(parentValue, _ref6, _ref7) {
    var id, name, slug, description, type, gender, image, auth;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = _ref6.id, name = _ref6.name, slug = _ref6.slug, description = _ref6.description, type = _ref6.type, gender = _ref6.gender, image = _ref6.image;
            auth = _ref7.auth;

            if (!(auth.user && auth.user.role === _params["default"].user.roles.admin)) {
              _context6.next = 8;
              break;
            }

            _context6.next = 5;
            return _models["default"].Product.update({
              name: name,
              slug: slug,
              description: description,
              type: type,
              gender: gender,
              image: image
            }, {
              where: {
                id: id
              }
            });

          case 5:
            return _context6.abrupt("return", _context6.sent);

          case 8:
            throw new Error('Operation denied.');

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _update.apply(this, arguments);
}

function remove(_x13, _x14, _x15) {
  return _remove.apply(this, arguments);
} // Product types


function _remove() {
  _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(parentValue, _ref8, _ref9) {
    var id, auth, product;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = _ref8.id;
            auth = _ref9.auth;

            if (!(auth.user && auth.user.role === _params["default"].user.roles.admin)) {
              _context7.next = 15;
              break;
            }

            _context7.next = 5;
            return _models["default"].Product.findOne({
              where: {
                id: id
              }
            });

          case 5:
            product = _context7.sent;

            if (product) {
              _context7.next = 10;
              break;
            }

            throw new Error('The product does not exists.');

          case 10:
            _context7.next = 12;
            return _models["default"].Product.destroy({
              where: {
                id: id
              }
            });

          case 12:
            return _context7.abrupt("return", _context7.sent);

          case 13:
            _context7.next = 16;
            break;

          case 15:
            throw new Error('Operation denied.');

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _remove.apply(this, arguments);
}

function getTypes() {
  return _getTypes.apply(this, arguments);
}

function _getTypes() {
  _getTypes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", Object.values(_params["default"].product.types));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getTypes.apply(this, arguments);
}
//# sourceMappingURL=resolvers.js.map