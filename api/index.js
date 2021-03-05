const { Router } = require('express');

const eventRoute = require('./event');
const claimRoute = require('./claim');




module.exports = (app)=> {

    const router = Router();
    router.use('/event', eventRoute);
    router.use('/claim', claimRoute);

    app.use('/api', router);
};
