import { Request, Response, NextFunction } from 'express';
import { placeAttributes } from '../types/place';

const Place = require('../models/place')

const createPlace = async (req: Request, res : Response, next: NextFunction) => {
  const {
    address_location,
    address_exact,
    address_category,
    picture_link,
    place_Name,
    place_Time,
    place_phoneNum,
    naver_link,
    catch_table_link,
    insta_link,
    place_hashtag,
    place_category,
    place_category_detail,
    place_price,
    scrab_count,
    date_concept,
  } : placeAttributes = req.body

  if (!address_location||
    !address_exact||
    !address_category||
    !place_Name||
    !place_category||
    !place_category_detail||
    !place_price||
    !date_concept) {
      return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
    }
  try {
    await Place.create({
      address_location,
      address_exact,
      address_category,
      picture_link,
      place_Name,
      place_Time,
      place_phoneNum,
      naver_link,
      catch_table_link,
      insta_link,
      place_hashtag,
      place_category,
      place_category_detail,
      place_price,
      scrab_count,
      date_concept
    });
    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.json({ success: false, error });
    // next는 에러를 넘겨주는 역할.
    next(error);
  }
}

module.exports = {
  createPlace
}
