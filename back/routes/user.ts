const express = require('express');
const controller = require('../controllers/user.controller');

const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.get('/', isLoggedIn, controller.userGet);

router.post('/register', controller.userRegister);

router.post('/login', controller.userLogin);

router.post('/logout', isLoggedIn, controller.userLogout);

export {};
module.exports = router;
