const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");

router.post("/addPost", wrap(controller.addPost));
router.get("/", wrap(controller.getPosts));

module.exports = router;
