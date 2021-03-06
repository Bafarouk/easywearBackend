const { Router } = require("express");

const eventRoute = require('./event');
const userRoute = require('./user');
const postRoute = require("./posts");
const gallerieRoute = require("./gallerie");




module.exports = (app)=> {

    const router = Router();
    router.use('/event', eventRoute);
    router.use('/user', userRoute);
    router.use("/post", postRoute);
    router.use("/gallerie", gallerieRoute);

    app.use('/api', router);
};
