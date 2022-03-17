import passport from 'passport';

const express = require('express');
const controller = require('../controllers/user.controller');
const upload = require('../middlewares/Upload');

const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

router.get('/checkName', controller.userCheckName);

router.get('/checkEmail', controller.userCheckEmail);

router.get('/getName', controller.userGetName);

router.get('/', controller.userGet);

router.post(
  '/register',
  upload.single(
    // 프론트에서 넘겨울 params key 값, 오른쪽 같이 넘겨줘야함-> {img: binary}
    'userImage',
  ),
  controller.userRegister,
);

router.post('/login', controller.userLogin);

router.post('/logout', isLoggedIn, controller.userLogout);

router.patch('/update', isLoggedIn, upload.single('userImage'), controller.userUpdate);

router.get('/kakao', passport.authenticate('kakao'));

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/',
  }),
  controller.socialLogin,
);

router.get('/naver', passport.authenticate('naver'));

router.get(
  '/naver/callback',
  passport.authenticate('naver', {
    failureRedirect: '/',
  }),
  controller.socialLogin,
);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  controller.socialLogin,
);

export {};
module.exports = router;
