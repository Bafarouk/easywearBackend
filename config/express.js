const bodyParser = require('body-parser');
const express = require('express');

const config = require('../config');
const api = require('../api');
var cors = require('cors')

/**
 * Configure the Express app with default configuration
 *
 * @export
 * @param {Express} app application
 * @returns {Object} Configured Express application
 */
function configure(app) {
    /** Body parser */
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    /** prevent CORS failures for this test */
    app.use(cors());

    /** Apidoc */
    app.use('/apidoc', express.static('apidoc'));

    /** Set-up routes */
    api(app);

    /**  App configuration. */
    app.set('port', config.port);
    return app;
}

module.exports = {
    configure,
};
