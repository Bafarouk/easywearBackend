const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");
// routes

router.get("/getOrders", wrap(controller.getOrdersByUserId));
router.get("/cancel", wrap(controller.cancel));

module.exports = router;
