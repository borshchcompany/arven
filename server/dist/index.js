"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cors from "cors";
// import morgan from "morgan";
// import bodyParser from "body-parser";
// import initializeDb from "./db";
// import middleware from "./middleware";
// import api from "./api";
// import config from "./config.json";

var app = (0, _express2.default)();
// app.server = http.createServer(app);
app.listen(3000, function () {
  return console.log("Example app listening on port 3000!");
});

app.get("/", function (req, res) {
  return res.send("Hello World Example Second!");
});
// // logger
// app.use(morgan("dev"));

// // 3rd party middleware
// app.use(
// 	cors({
// 		exposedHeaders: config.corsHeaders
// 	})
// );

// app.use(
// 	bodyParser.json({
// 		limit: config.bodyLimit
// 	})
// );

exports.default = app;
//# sourceMappingURL=index.js.map