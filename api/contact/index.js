const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");

router.post("/addContact", wrap(controller.addContact));
router.delete("/deleteContact/:id", wrap(controller.deleteContact));
router.get("/getAllContacts", wrap(controller.getAllContacts));
router.get("/getcontactById", wrap(controller.getcontactById));
router.post("/sendMail", wrap(controller.sendMail));

module.exports = router;
