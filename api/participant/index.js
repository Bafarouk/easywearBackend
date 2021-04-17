const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post("/addParticipation",wrap(controller.addParticipant));

module.exports = router ;