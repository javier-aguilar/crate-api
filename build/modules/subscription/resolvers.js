"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.getByUser = getByUser;
exports.getAll = getAll;
exports.create = create;
exports.remove = remove;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../setup/models"));

// App Imports
// Get subscription by ID
function get(_x, _x2) {
  return _get.apply(this, arguments);
} // Get subscription by user


function _get() {
  _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parentValue, _ref) {
    var id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id;
            _context.next = 3;
            return _models["default"].Subscription.findOne({
              where: {
                id: id
              },
              include: [{
                model: _models["default"].User,
                as: 'user'
              }, {
                model: _models["default"].Crate,
                as: 'crate'
              }]
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get.apply(this, arguments);
}

function getByUser(_x3, _x4, _x5) {
  return _getByUser.apply(this, arguments);
} // Get all subscriptions


function _getByUser() {
  _getByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parentValue, _ref2, _ref3) {
    var auth;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _objectDestructuringEmpty2["default"])(_ref2);
            auth = _ref3.auth;

            if (!(auth.user && auth.user.id > 0)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 5;
            return _models["default"].Subscription.findAll({
              where: {
                userId: auth.user.id
              },
              include: [{
                model: _models["default"].User,
                as: 'user'
              }, {
                model: _models["default"].Crate,
                as: 'crate'
              }]
            });

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 8:
            throw new Error('Please login to view your subscriptions.');

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getByUser.apply(this, arguments);
}

function getAll() {
  return _getAll.apply(this, arguments);
} // Create subscription


function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _models["default"].Subscription.findAll({
              include: [{
                model: _models["default"].User,
                as: 'user'
              }, {
                model: _models["default"].Crate,
                as: 'crate'
              }]
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getAll.apply(this, arguments);
}

function create(_x6, _x7, _x8) {
  return _create.apply(this, arguments);
} // Delete subscription


function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(parentValue, _ref4, _ref5) {
    var crateId, auth;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            crateId = _ref4.crateId;
            auth = _ref5.auth;

            if (!(auth.user && auth.user.id > 0)) {
              _context4.next = 8;
              break;
            }

            _context4.next = 5;
            return _models["default"].Subscription.create({
              crateId: crateId,
              userId: auth.user.id
            });

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 8:
            throw new Error('Please login to subscribe to this crate.');

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _create.apply(this, arguments);
}

function remove(_x9, _x10, _x11) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(parentValue, _ref6, _ref7) {
    var id, auth;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = _ref6.id;
            auth = _ref7.auth;

            if (!(auth.user && auth.user.id > 0)) {
              _context5.next = 8;
              break;
            }

            _context5.next = 5;
            return _models["default"].Subscription.destroy({
              where: {
                id: id,
                userId: auth.user.id
              }
            });

          case 5:
            return _context5.abrupt("return", _context5.sent);

          case 8:
            throw new Error('Access denied.');

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