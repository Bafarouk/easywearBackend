const { Router } = require('express');

const eventRoute = require('./event');




module.exports = (app)=> {

    const router = Router();
    router.use('/event', eventRoute);

    app.use('/api', router);
};
