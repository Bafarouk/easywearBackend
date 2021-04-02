const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post('/getUrl',wrap(controller.getUrl));


module.exports = router ;