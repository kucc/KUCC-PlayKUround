const express = require('express');
const controller = require('../controllers/place.controller');
const { isLoggedIn } = require('../middlewares/Auth');
const upload = require('../middlewares/Upload');

const router = express.Router();

router.get('/getByFilter', controller.getByFilter);

router.get('/getByMap', controller.getByMap);

router.get('/getByOne', controller.getByOne);

router.get('/getByArr', controller.getByArr);

router.get('/getByName', controller.getByName);

router.post('/create', isLoggedIn, upload.any(), controller.createPlace);

router.post('/rate', isLoggedIn, controller.ratePlace);

export {};
module.exports = router;
