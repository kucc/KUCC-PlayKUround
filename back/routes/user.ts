const express = require('express');
const controller = require("../controllers/user.controller");

const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

// eslint-disable-next-line consistent-return
router.get('/', isLoggedIn, controller.userGet);

router.post('/register', controller.userRegister);

router.post('/login', controller.userLogin);

// eslint-disable-next-line no-unused-vars
router.post('/logout', isLoggedIn, controller.userLogout);

export {};
module.exports = router;
