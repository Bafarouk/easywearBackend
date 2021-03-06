const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post('/addUser',wrap(controller.addUser));
router.post('/login',wrap(controller.login));

module.exports = router ;