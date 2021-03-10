const { Router } = require("express");

const eventRoute = require("./event");
const userRoute = require("./user");
const postRoute = require("./posts");
const gallerieRoute = require("./gallerie");
const claimRoute = require("./claim");
const participationRoute = require("./participant");


module.exports = (app)=> {

    const router = Router();
    router.use("/event", eventRoute);
    router.use("/user", userRoute);
    router.use("/gallerie", gallerieRoute);
    router.use("/claim", claimRoute);
    router.use("/post", postRoute);
    router.use("/participant", participationRoute);

    app.use('/api', router);
};
