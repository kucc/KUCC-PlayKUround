const express = require('express');
const controller = require("../controllers/user.controller");

const { isLoggedIn } = require('../middlewares/middlewares');

const router = express.Router();

// eslint-disable-next-line consistent-return
router.post('/register', controller.userRegister);

router.post('/login', controller.userLogin);

// eslint-disable-next-line no-unused-vars
router.post('/logout', isLoggedIn, controller.userLogout);

export {};
module.exports = router;
