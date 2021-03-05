const { Router } = require('express');

const eventRoute = require('./event');
const userRoute = require('./user');




module.exports = (app)=> {

    const router = Router();
    router.use('/event', eventRoute);
    router.use('/user', userRoute);

    app.use('/api', router);
};
