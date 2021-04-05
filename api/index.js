const { Router } = require("express");

const eventRoute = require("./event");
const userRoute = require("./user");
const postRoute = require("./posts");
<<<<<<< HEAD
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
=======
const paymentRoute = require("./payment");
const webScrappingRoute = require("./webscrapping");

module.exports = (app) => {
  const router = Router();
  router.use("/event", eventRoute);
  router.use("/claim", claimRoute);
  router.use("/user", userRoute);
  router.use("/post", postRoute);
  router.use("/payment", paymentRoute);
  router.use("/webscrapping", webScrappingRoute);

  app.use("/api", router);
>>>>>>> master

};
