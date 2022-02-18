const express = require('express');
const controller = require('../controllers/comment.controller');
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.post('/create', isLoggedIn, controller.createComment);

export {};
module.exports = router;
