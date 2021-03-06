const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');
module.exports = app => {
router.post("/", wrap(controller.create));
    router.get("/", controller.findAll);
    router.get("/:id", wrap(controller.findOne));
    router.put("/:id", wrap(controller.update));
    router.delete("/:id", wrap(controller.delete));
    router.delete("/", wrap(controller.deleteAll));
    app.use('/api/reaction', router);
};