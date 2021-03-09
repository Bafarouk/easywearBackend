const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");
router.get("/findOne/:id", wrap(controller.findOne));
router.get("/findAll", wrap(controller.findAll));
router.post("/addClaim", wrap(controller.addClaim));
router.delete("/delete/:id", wrap(controller.deleteClaim));
router.put("/validateClaim/:id", wrap(controller.validateClaim));
router.put("/UpdateClaim/:id", wrap(controller.updateclaimByUser));

module.exports = router;