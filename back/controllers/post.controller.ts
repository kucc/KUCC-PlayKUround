import { NextFunction, Request, RequestHandler, Response } from 'express';
import fs from 'fs';

import { Comment, Hashtag, Image, Place, Post, User } from '../models';
import { MulterFile } from '../models/image/imageType';
import { mainAttributes } from './utils';

const sequelize = require('sequelize');

const getByPlace: RequestHandler = async (req, res, next) => {
  const { placeId } = req.query;
  try {
    const result = await Post.findAll({
      where: { placeId },
    });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

const getByLatest: RequestHandler = async (req, res, next) => {
  try {
    const result = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

const likePost: RequestHandler = async (req, res, next) => {
  const { userId, postId } = req.body;
  const userResult: any = await User.findOne({ where: { id: userId } });
  const postResult: any = await Post.findOne({ where: { id: postId } });
  const { likeList } = userResult;
  const likeListArray = Object.values(likeList);
  const updateUserLikeList = likeList;

  // 예외 처리
  if (!userResult) return res.status(404).send('존재하지 않는 유저입니다.');
  if (!postResult) return res.status(404).send('존재하지 않는 게시물입니다.');
  try {
    // 이미 추천한 게시물이라면 like 취소
    if (likeList && likeListArray.includes(postId)) {
      // post의 likeNum 감소
      await postResult?.decrement('likeNum', { by: 1 });
      const findIndex = likeListArray.indexOf(postId);
      // 해당 index를 제거함
      delete updateUserLikeList[findIndex];
      // delete로 생긴 null 또한 제거함.
      let o: any = Object.fromEntries(
        Object.entries(updateUserLikeList).filter(([_, v]) => v != null),
      );
      await User.update({ likeList: Object.values(o) }, { where: { id: userId } });
      return res.status(200).send({ success: true, comment: 'like 취소' });
    }
    // like 구현
    // post의 likeNum 증가
    await postResult?.increment('likeNum', { by: 1 });
    // user의 likeList에 추가. JSON 타입이므로 key와 value로 추가함.
    updateUserLikeList[likeListArray.length] = postId;
    await User.update({ likeList: updateUserLikeList }, { where: { id: userId } });
    res.status(200).send({ success: true, comment: 'like 작성' });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

const createPost = async (
  req: Request & { files: MulterFile[] },
  res: Response,
  next: NextFunction,
) => {
  const { placeId, description } = req.body;
  if (!placeId || !description) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    const postResult = await Post.create({
      placeId,
      description,
      sourceId: 'temp',
    });
    await Post.update({ sourceId: `post_${placeId}` }, { where: { id: postResult.id } });
    // 사진이 있으면
    if (req.files) {
      await Promise.all(
        req.files.map(async (file: MulterFile) => {
          const imgData = fs
            .readFileSync(`assets${file.path.split('assets')[1]}`)
            .toString('base64');
          await Image.create({ path: imgData, source: `post_${postResult.id}` });
        }),
      );
    }
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

// Todo : delete, update

module.exports = {
  getByPlace,
  getByLatest,
  likePost,
  createPost,
};
