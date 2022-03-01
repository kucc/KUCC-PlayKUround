import { NextFunction, Request, RequestHandler, Response } from 'express';
import fs from 'fs';

import { Image, User } from '../models';
import { MulterFile } from '../models/image/imageType';
import { UserAttributes } from '../models/user/userType';

const bcrypt = require('bcryptjs');
const passport = require('passport');

const userGetName: RequestHandler = async (req, res, next) => {
  const { userEmail } = req.query;
  if (!userEmail) return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  try {
    const result = await User.findOne({ where: { email: userEmail } });
    res.status(200).send({ success: true, result: result ? result.name : null });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

const userGet: RequestHandler = async (req, res, next) => {
  const { id, name, email, role } = req.user;
  try {
    if (req.user) {
      // Image는 테이블을 분리했기 때문에 찾아줘야 함.
      const imageResult = await Image.findOne({ where: { source: `user_${id}` } });
      // user의 session에 담긴 정보를 보냄
      res.status(200).json({
        success: true,
        id,
        name,
        email,
        role,
        image: imageResult?.path,
      });
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

// eslint-disable-next-line consistent-return
const userRegister: RequestHandler = async (req, res, next) => {
  const { email, name } = req.body;
  try {
    const exUserEmail = await User.findOne({ where: { email } });
    if (exUserEmail) return res.status(403).send('이미 사용중인 이메일입니다.');

    const exUserName = await User.findOne({ where: { name } });
    if (exUserName) return res.status(403).send('이미 사용중인 닉네임입니다.');

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const userResult = await User.create({
      email,
      name,
      password: hashedPassword,
      sourceId: 'temp',
    });
    const { id: userId } = userResult;
    // user 생성 후 sourceId 값 채워주기
    await User.update({ sourceId: `user_${userId}` }, { where: { id: userId } });
    if (req.file) {
      // user 사진은 한 장만 지정 가능.
      const imgData = fs
        .readFileSync(`assets${req.file.path.split('assets')[1]}`)
        .toString('base64');
      // path는 BLOB 형식으로 저장. 프론트에서 사용시 Buffer 이용.
      await Image.create({ path: imgData, source: `user_${userId}` });
    }

    res.status(200).json({
      success: true,
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
  res.send({ success: true });
};

const userUpdate = async (
  req: Request & { file: MulterFile },
  res: Response,
  next: NextFunction,
) => {
  const { userId, email, name } = req.body;
  if (!userId) return res.status(403).send('유저 아이디가 필요합니다.');
  const exUserEmail = await User.findOne({ where: { email: email } });
  const exUserName = await User.findOne({ where: { name: name } });
  try {
    if (email) {
      if (exUserEmail) return res.status(403).send('이미 사용중인 이메일입니다.');
      await User.update({ email }, { where: { id: userId } });
    }
    if (name) {
      if (exUserName) return res.status(403).send('이미 사용중인 닉네임입니다.');
      await User.update({ name }, { where: { id: userId } });
    }
    if (req.file) {
      // user 사진은 한 장만 지정 가능.
      const imgData = fs
        .readFileSync(`assets${req.file.path.split('assets')[1]}`)
        .toString('base64');
      // path는 BLOB 형식으로 저장. 프론트에서 사용시 Buffer 이용.
      await Image.create({ path: imgData, source: `user_${userId}` });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

module.exports = {
  userGetName,
  userRegister,
  userLogin,
  userLogout,
  userGet,
  userUpdate,
};
