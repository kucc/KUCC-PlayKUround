import { NextFunction, Request, Response } from 'express';

import { Place, User } from '../models';
import { PlaceAttributes } from '../models/place/placeType';

const sequelize = require('sequelize');

const Op = sequelize.Op;

// 좌표에 따른 검색
const getByLocation = async (req: Request, res: Response, next: NextFunction) => {
  const latitude: number = parseInt(req.query.latitude as string);
  const longitude: number = parseInt(req.query.longitude as string);
  if (!latitude || !longitude) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    const result = await Place.findAll();
    // sequelize의 order 함수로 sort하면 더 효율적일 것 같은데, order에 custom 함수가 안들어가는듯..
    // 부득이하게 js로 sort 진행
    result.sort(function (a: PlaceAttributes, b: PlaceAttributes) {
      const a_distance = Math.sqrt(
        (a.address_location[0] - latitude) ** 2 + (a.address_location[1] - longitude) ** 2,
      );
      const b_distance = Math.sqrt(
        (b.address_location[0] - latitude) ** 2 + (b.address_location[1] - longitude) ** 2,
      );
      if (a_distance > b_distance) {
        return 1;
      }
      if (a_distance < b_distance) {
        return -1;
      }
      // a must be equal to b
      return 0;
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

// 이름에 의한 검색
const getByName = async (req: Request, res: Response, next: NextFunction) => {
  const name: string = req.query.name as string;
  if (!name) return res.status(400).end();
  try {
    const result = await Place.findAll({
      where: {
        // Op를 사용하여 유사 검색 구현: name을 포함하기만 하면 찾음
        place_Name: {
          [Op.like]: '%' + name + '%',
        },
      },
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

const createPlace = async (req: Request, res: Response, next: NextFunction) => {
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
    writer,
  }: PlaceAttributes = req.body;
  if (
    !address_location ||
    !address_exact ||
    !address_category ||
    !place_Name ||
    !place_category ||
    !place_category_detail ||
    !place_price ||
    !date_concept
  ) {
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
      date_concept,
      writer,
    });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
    // next는 에러를 넘겨주는 역할.
    // next(error);
  }
};

module.exports = {
  getByLocation,
  getByName,
  createPlace,
};
