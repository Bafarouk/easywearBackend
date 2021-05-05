const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post('/addEvent',wrap(controller.addEvent));
router.delete('/deleteEvent/:id',wrap(controller.deleteEvent));
router.get('/getAllEvents',wrap(controller.getAllEvents));
router.get('/getEventById/:id',wrap(controller.getEventById));
router.get('/getEventByEventName',wrap(controller.getEventByEventName));
router.put('/updateEvent/:id',wrap(controller.updateEvent));
router.get('/getRecentEvents',wrap(controller.getRecentEvents));
router.get('/getRecentEventsFin',wrap(controller.getRecentEventsFin));


module.exports = router ;