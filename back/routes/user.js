"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const controller = require("../controllers/user.controller");
const { isLoggedIn } = require('../middlewares/Auth');
const router = express.Router();
// eslint-disable-next-line consistent-return
/**
 * @swagger
 * /api/user/:
 *  tags:
 *    -user
 *  get:
 *    description : 유저 조회
 *    produces:
 *      - application/json
 *    responses:
 *      401:
 *        description : 로그인이 필요합니다.
 *      200:
 *        description : 유저 조회 성공
 *
 */
router.get('/', isLoggedIn, controller.userGet);
router.post('/register', controller.userRegister);
/**
 * @swagger
 * /api/user/login:
 *  tags:
 *    -user
 *  post:
 *    summary : 유저 로그인
 *    description : Post 방식으로 유저를 로그인합니다.
 *    requestBody:
 *      description: 유저 로그인 입니다.
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: integer
 *                description: "유저 이메일"
 *                example : jjs05hwang@gmail.com
 *              password:
 *                type: string
 *                description: "유저 비밀번호"
 *                example : 1234
 *    responses:
 *      401:
 *        description : 인증 실패.
 *      200:
 *        description : 로그인 성공
 *
 */
router.post('/login', controller.userLogin);
// eslint-disable-next-line no-unused-vars
router.post('/logout', isLoggedIn, controller.userLogout);
module.exports = router;
