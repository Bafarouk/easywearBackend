const express = require('express');
const router=  express.Router();
const controller = require('./controller');
const wrap = require('co-express');


router.post('/addGallerie',wrap(controller.addGallerie));
router.delete('/deleteGallerie',wrap(controller.deleteGallerie));
router.get('/getGallerieById',wrap(controller.getGallerieById));
router.get('/getAllGalleries',wrap(controller.getAllGalleries));
router.put('/updateGallerie',wrap(controller.updateGallerie));

module.exports = router ;