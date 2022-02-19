import { RequestHandler } from 'express';

import { Comment, Place } from '../models';

const sequelize = require('sequelize');

const createComment: RequestHandler = async (req, res, next) => {
  const { source, content, writer } = req.body;
  if (!source || !content || !writer) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    if (source.split('_')[0] === 'place') {
      const placeResult = await Place.findOne({ where: { sourceId: source } });
      await placeResult?.increment('commentCount', { by: 1 });
    }
    // post일 경우에도 대응(댓글순으로 가져오는 기능 없으면 사실 필요 없음!)
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
