const express = require("express");
const router = express.Router();
const controller = require("./controller");
const scrapping = require("./scrapping");
const wrap = require("co-express");

module.exports = (app) => {
  router.post("/", wrap(controller.create));
  router.post("/scrapping", wrap(scrapping.scrap));
  router.get("/", wrap(controller.findAll));
  router.get(
    "/getSimilarProducts/:id",
    wrap(controller.getSimilarProductsBasedOnPrice)
  );
  router.get("/filters", wrap(controller.filters));
  router.get("/getAllProducts", wrap(controller.findAllWithoutPagination));
  router.get("/:id", wrap(controller.findOne));
  router.put("/:id", wrap(controller.update));
  router.delete("/:id", wrap(controller.delete));
  router.delete("/", wrap(controller.deleteAll));
  app.use("/api/product", router);
};
