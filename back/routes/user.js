const express = require('express');

const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

// eslint-disable-next-line consistent-return
router.post('/register', async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      // eslint-disable-next-line no-alert
      if (typeof window !== 'undefined') {
        alert('이미 사용중인 이메일입니다.');
      }
      return res.status(403).send('이미 사용중인 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });
    res.status(200).json({
      success: true,
      exUser,
    });
  } catch (err) {
    res.json({ success: false, err });
    next(err);
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    return req.login(user, async loginErr => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// eslint-disable-next-line no-unused-vars
router.post('/logout', isLoggedIn, (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
