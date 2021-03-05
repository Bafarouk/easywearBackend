const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");

router.post("/", wrap(controller.addPost));
router.get("/", wrap(controller.getPosts));
router.get("/:id", wrap(controller.getPostById));
router.put("/:id", wrap(controller.putPost));
router.delete("/:id", wrap(controller.deletePost));

module.exports = router;
