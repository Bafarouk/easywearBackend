const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post('/',wrap());
router.delete('/',wrap());
router.get('/',wrap());
router.get('/',wrap());
router.get('/',wrap());
router.put('/',wrap());

module.exports = router ;