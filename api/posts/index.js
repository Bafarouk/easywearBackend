const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");

router.post("/", wrap(controller.addPost));

router.get("/", wrap(controller.getPosts));
router.get("/userPosts/:userid", wrap(controller.getUserPosts));
router.get("/:id", wrap(controller.getPostById));

router.put("/:id", wrap(controller.putPost));
router.delete("/:id", wrap(controller.deletePost));
router.get("/getEventPosts/:eventId",wrap(controller.getEventPosts));
router.get("/get/countPosts/:eventId", wrap(controller.countPosts));

module.exports = router;
