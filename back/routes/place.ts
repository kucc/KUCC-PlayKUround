const express = require('express');
const controller = require('../controllers/place.controller');
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.get('/getByComment', controller.getByComment);

router.get('/getByArea', controller.getByArea);

router.get('/getByRate', controller.getByRate);

router.get('/getByMap', controller.getByMap);

router.get('/getByOne', controller.getByOne);

router.get('/getByLocation', controller.getByLocation);

router.get('/getByName', controller.getByName);

router.post('/create', isLoggedIn, controller.createPlace);

export {};
module.exports = router;
