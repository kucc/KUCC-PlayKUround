import { NextFunction, Request, RequestHandler, Response } from 'express';
import fs from 'fs';

import { Image, User } from '../models';
import { MulterFile } from '../models/image/imageType';
import { UserAttributes } from '../models/user/userType';

const bcrypt = require('bcryptjs');
const passport = require('passport');

const userGet: RequestHandler = async (req, res, next) => {
  try {
    if (req.user) {
      // Image는 테이블을 분리했기 때문에 찾아줘야 함.
      // Blob type 그대로 보내는게 맞나??
      const imageResult = await Image.findOne({ where: { source: `user_${req.user.id}` } });
      // user의 session에 담긴 정보를 보냄
      res.status(200).json({
        success: true,
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        image: imageResult?.path,
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
    const userResult = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
      sourceId: 'temp',
    });
    // user 생성 후 sourceId 값 채워주기
    await User.update({ sourceId: `user_${userResult.id}` }, { where: { id: userResult.id } });

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
  req: Request & { file: MulterFile },
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.body;
  if (!userId) return res.status(403).send('유저 아이디가 필요합니다.');
  try {
    // user 사진은 한 장만 지정 가능.
    const imgData = fs.readFileSync(`assets${req.file.path.split('assets')[1]}`).toString('base64');
    // path는 BLOB 형식으로 저장. 프론트에서 사용시 Buffer 이용.
    await Image.create({ path: imgData, source: `user_${userId}` });
    res.json({ success: true, path: imgData });
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
