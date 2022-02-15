import { RequestHandler } from 'express';

import { Comment, Hashtag, Place } from '../models';
import { mainAttributes } from './utils';

const sequelize = require('sequelize');

const getHashtag: RequestHandler = async (req, res, next) => {
  const hashtag: string = req.query.hashtag as string;
  const type: string = req.query.type as string;
  if (!hashtag || (type !== 'all' && type !== 'place' && type !== 'post')) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  // 요청 type에 따라 다른 모델들을 가져옴.
  var includeModel: any = [];
  if (type === 'all') {
    includeModel = [
      {
        model: Place,
        attributes: mainAttributes,
      },
      // post 모델 추가
    ];
  } else if (type === 'place') {
    includeModel = {
      model: Place,
      attributes: mainAttributes,
    };
  } else if (type === 'post') {
    // post 모델 추가
    // includeModel = {
    //   model: Place,
    //   attributes: mainAttributes,
    // }
  }
  try {
    const result = await Hashtag.findAll({
      where: { content: hashtag },
      attributes: [],
      // 지금은 PLACE만 있지만, Post도 추가해야함
      include: includeModel,
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

const createHashtag: RequestHandler = async (req, res, next) => {
  const { source, hashtags } = req.body;
  if (!source || !hashtags) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    await Promise.all(
      hashtags.map(async (hashtag: string) => {
        await Hashtag.create({
          content: hashtag,
          source,
        });
      }),
    );
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

// Todo : delete, update

module.exports = {
  getHashtag,
  createHashtag,
};
