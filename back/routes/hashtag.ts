const express = require('express');
const controller = require('../controllers/hashtag.controller');
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.get('/get', controller.getHashtag);

router.post('/create', isLoggedIn, controller.createHashtag);

export {};
module.exports = router;
