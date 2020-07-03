"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getById = getById;
exports.getAll = getAll;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../setup/models"));

var _params = _interopRequireDefault(require("../../config/params"));

// App Imports
// Get crate by ID
function getById(_x, _x2) {
  return _getById.apply(this, arguments);
} // Get all crates


function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parentValue, _ref) {
    var crateId, crate;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            crateId = _ref.crateId;
            _context.next = 3;
            return _models["default"].Crate.findOne({
              where: {
                id: crateId
              }
            });

          case 3:
            crate = _context.sent;

            if (crate) {
              _context.next = 8;
              break;
            }

            throw new Error('The crate you are looking for does not exists or has been discontinued.');

          case 8:
            return _context.abrupt("return", crate);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getById.apply(this, arguments);
}

function getAll(_x3, _x4) {
  return _getAll.apply(this, arguments);
} // Create crate


function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parentValue, _ref2) {
    var orderBy;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            orderBy = _ref2.orderBy;
            _context2.next = 3;
            return _models["default"].Crate.findAll({
              order: [['id', orderBy]]
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAll.apply(this, arguments);
}

function create(_x5, _x6, _x7) {
  return _create.apply(this, arguments);
} // Update crate


function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parentValue, _ref3, _ref4) {
    var name, description, auth;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = _ref3.name, description = _ref3.description;
            auth = _ref4.auth;

            if (!(auth.user && auth.user.role === _params["default"].user.roles.admin)) {
              _context3.next = 8;
              break;
            }

            _context3.next = 5;
            return _models["default"].Crate.create({
              name: name,
              description: description
            });

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 8:
            throw new Error('Operation denied.');

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _create.apply(this, arguments);
}

function update(_x8, _x9, _x10) {
  return _update.apply(this, arguments);
} // Delete crate


function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(parentValue, _ref5, _ref6) {
    var id, name, description, auth;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = _ref5.id, name = _ref5.name, description = _ref5.description;
            auth = _ref6.auth;

            if (!(auth.user && auth.user.role === _params["default"].user.roles.admin)) {
              _context4.next = 8;
              break;
            }

            _context4.next = 5;
            return _models["default"].Crate.update({
              name: name,
              description: description
            }, {
              where: {
                id: id
              }
            });

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 8:
            throw new Error('Operation denied.');

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _update.apply(this, arguments);
}

function remove(_x11, _x12, _x13) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(parentValue, _ref7, _ref8) {
    var id, auth;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = _ref7.id;
            auth = _ref8.auth;

            if (!(auth.user && auth.user.role === _params["default"].user.roles.admin)) {
              _context5.next = 8;
              break;
            }

            _context5.next = 5;
            return _models["default"].Crate.destroy({
              where: {
                id: id
              }
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
  return _remove.apply(this, arguments);
}
//# sourceMappingURL=resolvers.js.map