import { NextFunction, Request, RequestHandler, Response } from 'express';
import fs from 'fs';

import { Image, User } from '../models';
import { MulterFile } from '../models/image/imageType';
import { UserAttributes, UserInterface } from '../models/user/userType';

const bcrypt = require('bcryptjs');
const passport = require('passport');

const userGet: RequestHandler = async (req, res, next) => {
  try {
    if (req.user) {
      res.status(200).json({
        success: true,
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        image: req.user.image,
      });
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// eslint-disable-next-line consistent-return
const userRegister: RequestHandler = async (req, res, next) => {
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

const userLogin: RequestHandler = (req, res, next) => {
  passport.authenticate('local', (err: Error, user: UserAttributes, info: any) => {
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
  })(req, res, next);
};

// eslint-disable-next-line no-unused-vars
const userLogout: RequestHandler = (req, res, next) => {
  req.logout();
  req.session.destroy;
  res.send('ok');
};

const userUpdate = async (
  req: Request & { files: MulterFile[] },
  res: Response,
  next: NextFunction,
) => {
  res.send('dsfhj');
  const { userId } = req.body;
  if (!userId) return res.status(403).send('유저 아이디가 필요합니다.');
  try {
    console.log(req.files);
    const imgData = fs.readFileSync(`app${req.files.path.split('app')[1]}`).toString('base64');

    await Image.create({ path: imgData, source: userId });

    res.json({ path: imgData });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  userGet,
  userUpdate,
};
