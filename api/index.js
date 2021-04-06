const { Router } = require("express");

const eventRoute = require("./event");
const claimRoute = require("./claim");
const userRoute = require("./user");
const postRoute = require("./posts");
const contactRoute = require("./contact");

module.exports = (app) => {
  const router = Router();
  router.use("/event", eventRoute);
  router.use("/claim", claimRoute);
  router.use("/user", userRoute);
  router.use("/post", postRoute);
  router.use("/contact", contactRoute);

  app.use("/api", router);
};
