const express = require('express');
const controller = require('../controllers/place.controller');
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.get('/getByCategory', controller.getByCategory);

router.get('/getByComment', controller.getByComment);

router.get('/getByArea', controller.getByArea);

router.get('/getByRate', controller.getByRate);

router.get('/getByMap', controller.getByMap);

router.get('/getByOne', controller.getByOne);

router.get('/getByLocation', controller.getByLocation);

router.get('/getByName', controller.getByName);

router.post('/create', isLoggedIn, controller.createPlace);

router.post('/rate', isLoggedIn, controller.ratePlace);

export {};
module.exports = router;
