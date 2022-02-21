import { RequestHandler } from 'express';

import { Comment, Hashtag, Place, Post } from '../models';
import { mainAttributes } from './utils';

const sequelize = require('sequelize');

const getByLatest: RequestHandler = async (req, res, next) => {
  try {
    //
    const result = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).send({ success: true, result });
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
  createPost,
};
