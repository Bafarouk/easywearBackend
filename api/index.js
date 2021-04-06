const { Router } = require("express");

const eventRoute = require("./event");
const claimRoute = require("./claim");
const userRoute = require("./user");
const postRoute = require("./posts");

const contactRoute = require("./contact");

const paymentRoute = require("./payment");
const webScrappingRoute = require("./webscrapping");


module.exports = (app) => {
  const router = Router();
  router.use("/event", eventRoute);
  router.use("/claim", claimRoute);
  router.use("/user", userRoute);
  router.use("/post", postRoute);

  router.use("/contact", contactRoute);


  router.use("/payment", paymentRoute);
  router.use("/webscrapping", webScrappingRoute);

  app.use("/api", router);
};
