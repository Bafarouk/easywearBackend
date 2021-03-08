const { Router } = require("express");

const eventRoute = require('./event');
const userRoute = require('./user');
const webScrappingRoute = require('./webscrapping');

const postRoute = require("./posts");



module.exports = (app)=> {

    const router = Router();
    router.use('/event', eventRoute);
    router.use('/user', userRoute);
    router.use('/webscrapping', webScrappingRoute);
    router.use("/post", postRoute);

    app.use('/api', router);
};
