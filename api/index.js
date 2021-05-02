const { Router } = require("express");

const eventRoute = require("./event");
const claimRoute = require("./claim");
const userRoute = require("./user");
const postRoute = require("./posts");

const contactRoute = require("./contact");

const paymentRoute = require("./payment");
const webScrappingRoute = require("./webscrapping");
const recommendation = require("./recommendation");
const token = require("./token");
const order = require("./order");

module.exports = (app) => {
  const router = Router();
  router.use("/event", eventRoute);
  router.use("/claim", claimRoute);
  router.use("/user", userRoute);
  router.use("/post", postRoute);

  router.use("/contact", contactRoute);

  router.use("/payment", paymentRoute);
  router.use("/webscrapping", webScrappingRoute);
  router.use("/recommendation", recommendation);
  router.use("/token", token);
  router.use("/order", order);

  app.use("/api", router);
};
