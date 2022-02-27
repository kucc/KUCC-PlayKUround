const express = require('express');
const controller = require('../controllers/user.controller');
const upload = require('../middlewares/Upload');

const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

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

export {};
module.exports = router;
