const express = require('express');
const controller = require('../controllers/user.controller');

const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

module.exports = router;