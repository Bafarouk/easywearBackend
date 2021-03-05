const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post('/addClaim',wrap(controller.addClaim));


module.exports = router ;