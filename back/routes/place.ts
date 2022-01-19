const express = require('express');
const controller = require('../controllers/place.controller')
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.post('/create', isLoggedIn, controller.createPlace)



// for typescript error : Cannot redeclare block-scoped variable 'express'.
export {};
module.exports = router;
