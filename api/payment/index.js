const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");
// routes

router.post("/payment", wrap(controller.pay));
router.get("/success", wrap(controller.success));
router.get("/cancel", wrap(controller.cancel));

module.exports = router;
