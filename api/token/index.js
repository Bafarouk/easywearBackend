const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");

router.get("/confirmation/:email/:tt", wrap(controller.confirmEmail));

module.exports = router;
