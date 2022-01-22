const express = require('express');
const controller = require('../controllers/place.controller')
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

console.log("HERE!!")

// 이름으로 검색은 query string으로 name을 받아옴
router.get('/getByName', controller.getByName)
// 생성은 로그인이 필요한 작업, userId와 연결해야할듯
router.post('/create', isLoggedIn, controller.createPlace)



// for typescript error : Cannot redeclare block-scoped variable 'express'.
export {};
module.exports = router;
