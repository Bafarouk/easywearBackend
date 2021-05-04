const bodyParser = require("body-parser");
const express = require("express");
const paypal = require("paypal-rest-sdk");

const config = require("../config");
const api = require("../api");
var cors = require("cors");

/**
 * Configure the Express app with default configuration
 *
 * @export
 * @param {Express} app application
 * @returns {Object} Configured Express application
 */
function configure(app) {
  /** Body parser */
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(express.json({ limit: "50mb" }));

  /** paypal config */
  paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
      "AQ5TunZNqRBLe-xixbE3nr3qnhx_wPuBhiR_buXeIot7yun7l2EFSdVZYKJ7hL__k8pEePgTzZEUR80P",
    client_secret:
      "EEjn62OMEhiHdCiY2mhFt9NMLr-3pyMngOQwYyZuZnftBDQ6wdMoDMGYTFY_6BSxQZpG3PZBBL5Pv9Gj",
  });

  /** prevent CORS failures for this test */
   //app.use(cors({ origin: "https://secure-ocean-54413.herokuapp.com/" }));
  //  app.use(cors());

  /** Apidoc */
  app.use("/apidoc", express.static("apidoc"));

  /** Set-up routes */
  api(app);

  /**  App configuration. */
  app.set("port", config.port);
  return app;
}

module.exports = {
  configure,
};
