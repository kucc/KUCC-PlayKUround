import { Request, Response, NextFunction } from 'express';
import { UserInterface } from '../models/user';

const express = require('express');

const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

// eslint-disable-next-line consistent-return
router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
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

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: Error, user:UserInterface, info:any) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    return req.body.login(user, async (loginErr: Error) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.body.user.id },
        attributes: {
          exclude: ['password'],
        },
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req,res,next);
});

// eslint-disable-next-line no-unused-vars
router.post('/logout', isLoggedIn, (req: Request, res: Response, next: NextFunction) => {
  req.body.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
