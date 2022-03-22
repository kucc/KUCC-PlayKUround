const express = require('express');
const controller = require('../controllers/Course.controller');
const { isLoggedIn } = require('../middlewares/Auth');
const upload = require('../middlewares/Upload');

const router = express.Router();

router.post('/create', isLoggedIn, upload.any(), controller.createCourse);

export default router;
