var createError = require("http-errors");
const http = require("http");
var express = require("express");
const co = require("co");
const PORT = process.env.PORT || 3100;
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("chpr-logger");
const { configure } = require("./config/express");

var mongoose = require("mongoose");
require("mongoose-paginate-v2");

const url =
  "mongodb+srv://root:root@cluster0.o6bqt.mongodb.net/PiDev?retryWrites=true&w=majority";

let app;
let server;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const mongo = mongoose.connection;

mongo.on("connected", () => {
  console.log("initialisation");
});
mongo.on("open", () => {
  console.log("connexion etablie");
});

mongo.on("error", (err) => {
  console.log(err);
});

/**
 * Start the web app.
 *
 * @returns {Promise} when app end to start
 */
async function start() {
  if (app) {
    return app;
  }
  logger.info("Express web server creation");
  app = configure(express());
  server = http.createServer(app);

  require("./api/product/index")(app);
  require("./api/comment/index")(app);
  require("./api/reaction/index")(app);
  if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
  await server.listen(PORT);

  logger.info(
    {
      port: server.address().port,
      environment: process.env.NODE_ENV,
    },
    "✔ Server running"
  );

  return app;
}

/**
 * Stop the web app.
 *
 * @returns {Promise} when app end to start
 */
async function stop() {
  if (server) {
    await server.close();
    server = null;
    app = null;
  }
  await mongoose.disconnect();
  return Promise.resolve();
}

if (!module.parent) {
  co(start);
}

module.exports = {
  start,
  stop,
  get server() {
    return server;
  },
  get app() {
    return app;
  },
};
