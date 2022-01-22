import { Request, Response, NextFunction } from 'express';
import { Place, User } from '../models';
import { PlaceAttributes } from '../models/place/placeType';
const sequelize = require("sequelize");

const Op = sequelize.Op;

// 이름에 의한 검색
const getByName = async (req: Request, res : Response, next : NextFunction) => {
  const name : string = req.query.name as string;
  if (!name) return res.status(400).end()
  try {
    const result = await Place.findAll({
      where: {
        // Op를 사용하여 유사 검색 구현: name을 포함하기만 하면 찾음 
        place_Name : {
          [Op.like] : "%" + name + "%"
        }
      }
    })
    res.status(200).json({
      success: true, result
    });
  } catch (error) {
    res.json({ success: false, error });
    next(error);
  }
}

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
    writer
  } : PlaceAttributes = req.body
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
      date_concept,
      writer
    });
    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.json({ success: false, error });
    // next는 에러를 넘겨주는 역할.
    // next(error);
  }
}

module.exports = {
  getByName,
  createPlace
}
