import { Request, Response, NextFunction } from 'express';
import { UserInterface } from '../types/user';

const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');

// eslint-disable-next-line consistent-return
const userRegister =  async (req: Request, res: Response, next: NextFunction) => {
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
    // next는 에러를 넘겨주는 역할.
    next(err);
  }
};

const userLogin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: Error, user:UserInterface, info:any) => {
    if (err) {
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    // req.body.login => req.login
    return req.login(user, async (loginErr: Error) => {
      if (loginErr) {
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        // id : req.body.user.id => id : req.user.id
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req,res,next);
};

// eslint-disable-next-line no-unused-vars
const userLogout = (req: any, res: Response, next: NextFunction) => {
  req.logout();
  req.session.destroy;
  res.send('ok');
};

module.exports = {
  userRegister,
  userLogin,
  userLogout
}
