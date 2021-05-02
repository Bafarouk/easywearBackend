const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");

router.post("/addUser", wrap(controller.addUser));
router.post("/addUserAdmin", wrap(controller.addUserAdmin));
router.post("/login", wrap(controller.login));
router.get("/profile", wrap(controller.profile));
router.delete("/delete/:id", wrap(controller.deleteUser));
router.put("/update/:id", wrap(controller.updateUser));
router.get("/getAll", wrap(controller.getAllUsers));
router.get("/getUser/:id", wrap(controller.getUserById));
router.get("/confirmation/:email/:token", wrap(controller.confirmEmail));
router.get("/byrole", wrap(controller.getUserByRole));
router.get("/auth/google/url", wrap(controller.GetLoginUrl));
router.get("/auth/google/callback", wrap(controller.GetUserFromGoogle));
router.get("/auth/me", wrap(controller.GetCurrentUser));

module.exports = router;
