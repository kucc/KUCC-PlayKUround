const express = require('express');
const controller = require('../controllers/post.controller');
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.get('/getByLatest', controller.getByLatest);

router.post('/create', isLoggedIn, controller.createPost);

export {};
module.exports = router;
