const express = require('express');
const controller = require('../controllers/user.controller');
const upload = require('../middlewares/Upload');

const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.get('/', controller.userGet);

router.post('/register', controller.userRegister);

router.post('/login', controller.userLogin);

router.post('/logout', isLoggedIn, controller.userLogout);

router.patch('/update', isLoggedIn, upload, controller.userUpdate);

export {};
module.exports = router;
