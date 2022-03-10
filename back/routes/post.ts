const express = require('express');
const controller = require('../controllers/post.controller');
const { isLoggedIn } = require('../middlewares/Auth');
const upload = require('../middlewares/Upload');

const router = express.Router();

router.get('/getByOne', controller.getByOne);

router.get('/getByPlace', controller.getByPlace);

router.get('/getByLatest', controller.getByLatest);

router.post('/like', isLoggedIn, controller.likePost);

router.post('/create', isLoggedIn, upload.any(), controller.createPost);

export {};
module.exports = router;
