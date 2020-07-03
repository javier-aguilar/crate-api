"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.login = login;
exports.getById = getById;
exports.getAll = getAll;
exports.remove = remove;
exports.getGenders = getGenders;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _server = _interopRequireDefault(require("../../config/server"));

var _params = _interopRequireDefault(require("../../config/params"));

var _models = _interopRequireDefault(require("../../setup/models"));

// Imports
// App Imports
// Create
function create(_x, _x2) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parentValue, _ref) {
    var name, email, password, user, passwordHashed;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = _ref.name, email = _ref.email, password = _ref.password;
            _context.next = 3;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 13;
              break;
            }

            _context.next = 7;
            return _bcrypt["default"].hash(password, _server["default"].saltRounds);

          case 7:
            passwordHashed = _context.sent;
            _context.next = 10;
            return _models["default"].User.create({
              name: name,
              email: email,
              password: passwordHashed
            });

          case 10:
            return _context.abrupt("return", _context.sent);

          case 13:
            throw new Error("The email ".concat(email, " is already registered. Please try to login."));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _create.apply(this, arguments);
}

function login(_x3, _x4) {
  return _login.apply(this, arguments);
} // Get by ID


function _login() {
  _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parentValue, _ref2) {
    var email, password, user, userDetails, passwordMatch, userDetailsToken;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref2.email, password = _ref2.password;
            _context2.next = 3;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 8;
              break;
            }

            throw new Error("We do not have any user registered with ".concat(email, " email address. Please signup."));

          case 8:
            userDetails = user.get(); // User exists

            _context2.next = 11;
            return _bcrypt["default"].compare(password, userDetails.password);

          case 11:
            passwordMatch = _context2.sent;

            if (passwordMatch) {
              _context2.next = 16;
              break;
            }

            throw new Error("Sorry, the password you entered is incorrect. Please try again.");

          case 16:
            userDetailsToken = {
              id: userDetails.id,
              name: userDetails.name,
              email: userDetails.email,
              role: userDetails.role
            };
            return _context2.abrupt("return", {
              user: userDetails,
              token: _jsonwebtoken["default"].sign(userDetailsToken, _server["default"].secret)
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _login.apply(this, arguments);
}

function getById(_x5, _x6) {
  return _getById.apply(this, arguments);
} // Get all


function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parentValue, _ref3) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref3.id;
            _context3.next = 3;
            return _models["default"].User.findOne({
              where: {
                id: id
              }
            });

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getById.apply(this, arguments);
}

function getAll() {
  return _getAll.apply(this, arguments);
} // Delete


function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models["default"].User.findAll();

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getAll.apply(this, arguments);
}

function remove(_x7, _x8) {
  return _remove.apply(this, arguments);
} // User genders


function _remove() {
  _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(parentValue, _ref4) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = _ref4.id;
            _context5.next = 3;
            return _models["default"].User.destroy({
              where: {
                id: id
              }
            });

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _remove.apply(this, arguments);
}

function getGenders() {
  return _getGenders.apply(this, arguments);
}

function _getGenders() {
  _getGenders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", Object.values(_params["default"].user.gender));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getGenders.apply(this, arguments);
}
//# sourceMappingURL=resolvers.js.map