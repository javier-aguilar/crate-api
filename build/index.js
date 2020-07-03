"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _loadModules = _interopRequireDefault(require("./setup/load-modules"));

var _graphql = _interopRequireDefault(require("./setup/graphql"));

var _upload = _interopRequireDefault(require("./setup/upload"));

var _startServer = _interopRequireDefault(require("./setup/start-server"));

// Imports
// App Imports
// Create express server
var server = (0, _express["default"])(); // Setup load modules

(0, _loadModules["default"])(server); // Setup uploads

(0, _upload["default"])(server); // Setup GraphQL

(0, _graphql["default"])(server); // Start server

(0, _startServer["default"])(server);
//# sourceMappingURL=index.js.map