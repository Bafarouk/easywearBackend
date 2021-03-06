const { Router } = require("express");

const eventRoute = require("./event");
const postRoute = require("./posts");

module.exports = (app) => {
  const router = Router();
  router.use("/event", eventRoute);
  router.use("/post", postRoute);

  app.use("/api", router);
};
