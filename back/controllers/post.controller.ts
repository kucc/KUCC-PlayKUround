import { RequestHandler } from 'express';

import { Comment, Hashtag, Place, Post, User } from '../models';
import { mainAttributes } from './utils';

const sequelize = require('sequelize');

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
  const userResult: any = await User.findOne({ where: { id: userId }, plain: true });
  const postResult: any = await Post.findOne({ where: { id: postId }, plain: true });
  const { likeList } = userResult;
  console.log(typeof likeList);
  console.log(likeList);
  console.log(likeList.values());
  console.log(typeof Array.from(likeList));

  // 예외 처리
  if (!userResult) res.status(404).send('존재하지 않는 유저입니다.');
  if (!postResult) res.status(404).send('존재하지 않는 게시물입니다.');
  if (userResult.likeList && userResult.likeList.includes(postId))
    res.status(403).send('이미 추천한 게시물입니다.');
  // like logic
  try {
    await postResult?.increment('likeNum', { by: 1 });
    var updateUserLikeList;
    if (!likeList) {
      updateUserLikeList = [postId];
    } else {
      updateUserLikeList = likeList.push(String(postId));
    }
    console.log(updateUserLikeList);
    await User.update({ likeList: updateUserLikeList }, { where: { id: userId } });
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

const createPost: RequestHandler = async (req, res, next) => {
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
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

// Todo : delete, update

module.exports = {
  getByLatest,
  likePost,
  createPost,
};
