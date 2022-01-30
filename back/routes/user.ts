const express = require('express');
const controller = require('../controllers/user.controller');

const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();
// swagger - paths:로 한번에 모아줄 수도 있다..

// eslint-disable-next-line consistent-return
/**
 * @swagger
 * /api/user/:
 *  get:
 *    tags:
 *      - user
 *    summary : 유저 정보 가져오기
 *    description : Get 방식으로 현재 session(쿠키)의 유저의 정보를 가져옵니다. 로그인이 필요한 api입니다.
 *    responses:
 *      401:
 *        description : 로그인이 필요합니다.
 *      200:
 *        description : 유저 조회 성공
 *
 */
router.get('/', isLoggedIn, controller.userGet);

/**
 * @swagger
 * /api/user/register:
 *  post:
 *    tags:
 *      - user
 *    summary : 유저 회원가입
 *    description : Post 방식으로 유저를 회원가입합니다.
 *    requestBody:
 *      description: 유저 회원가입입니다.
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *                description: 유저 이름입니다.
 *                example : Hjun
 *              email:
 *                type: string
 *                description: 유저 이메일입니다.
 *                example : jjs05hwang@gmail.com
 *              password:
 *                type: string
 *                description: 유저 비밀번호입니다.
 *                example : 1234
 *    responses:
 *      200:
 *        description : 로그인 성공
 *      401:
 *        description : 인증 실패.
 *      403:
 *        description : 이미 사용중인 이메일입니다..
 *
 */
router.post('/register', controller.userRegister);

/**
 * @swagger
 * /api/user/login:
 *  post:
 *    tags:
 *      - user
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
 *                type: string
 *                description: 유저 이메일입니다.
 *                example : jjs05hwang@gmail.com
 *              password:
 *                type: string
 *                description: 유저 비밀번호입니다.
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

export {};
module.exports = router;
