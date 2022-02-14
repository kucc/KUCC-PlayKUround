import { RequestHandler } from 'express';

import { Comment } from '../models';

const sequelize = require('sequelize');

const createComment: RequestHandler = async (req, res, next) => {
  const { source, content, writer } = req.body;
  if (!source || !content || !writer) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    const result = await Comment.create({
      content,
      writer,
      source,
    });
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

// Todo : delete, update

module.exports = {
  createComment,
};
