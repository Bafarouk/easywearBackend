const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post('/addEvent',wrap(controller.addEvent));
router.delete('/deleteEvent',wrap(controller.deleteEvent));
router.get('/getAllEvents',wrap(controller.getAllEvents));
router.get('/getEventById',wrap(controller.getEventById));
router.get('/getEventByEventName',wrap(controller.getEventByEventName));
router.post('/updateEvent',wrap(controller.updateEvent));


module.exports = router ;