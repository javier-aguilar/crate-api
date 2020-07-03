"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _server = _interopRequireDefault(require("../config/server.json"));

// Imports
// App Imports
// File upload configurations and route
function _default(server) {
  console.info('SETUP - Upload...'); // Set destination

  var storage = _multer["default"].diskStorage({
    destination: _path["default"].join(__dirname, '..', '..', 'public', 'images', 'uploads'),
    filename: function filename(request, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + _path["default"].extname(file.originalname));
    }
  });

  var upload = (0, _multer["default"])({
    storage: storage
  }).single('file'); // Upload route

  server.post(_server["default"].upload.endpoint, function (request, response) {
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename
        });
      } else {
        response.json({
          success: false,
          file: null
        });
      }
    });
  });
}
//# sourceMappingURL=upload.js.map