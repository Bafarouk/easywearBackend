const express = require("express");
const router = express.Router();
const controller = require("./controller");
const wrap = require("co-express");

router.post("/addRate", wrap(controller.addRate));
router.post("/addSimilar", wrap(controller.addSimilar));
router.post("/addSuggestion", wrap(controller.addSuggestion));
router.delete("/delete/:id", wrap(controller.deleteRate));
router.delete("/deleteSimilar/:id", wrap(controller.deleteSimilar));
router.delete("/deleteSuggestion/:id", wrap(controller.deleteSuggestion));
router.get("/itemsByUser", wrap(controller.itemsByUser));
router.get("/usersByItem", wrap(controller.usersByItem));
router.get("/updateSimilar", wrap(controller.updateSimilar));
router.get("/updateSuggestion", wrap(controller.updateSuggestion));
router.get("/getSuggestion", wrap(controller.getSuggestionByUserId));
router.post("/rateItem", wrap(controller.rateItem));

module.exports = router;
