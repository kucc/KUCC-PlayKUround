import { NextFunction, Request, RequestHandler, Response } from 'express';
import haversine from 'haversine-distance';

import { Menu, Place, User } from '../models';
import { PlaceAttributes } from '../models/place/placeType';

const sequelize = require('sequelize');

const Op = sequelize.Op;

// 위도, 경도가 주어지면 거리 구하기 함수 (자주 쓰이므로 분리)
// haversine 라이브러리를 사용해도 되지만 아마 이게 더 효율적일듯??
const getDistance = (
  currentLatitude: number,
  currentLongitude: number,
  targetLatitude: number,
  targetLongitude: number,
) => Math.sqrt((currentLatitude - targetLatitude) ** 2 + (currentLongitude - targetLongitude) ** 2);

// 지도에서 사용할 모든 정보 불러오기. 지도 render에 필요한 정보만 보냄.
const getByMap: RequestHandler = async (req, res, next) => {
  try {
    const result = await Place.findAll({
      attributes: [
        'id',
        'addressLocation',
        'placeName',
        'pictureLink',
        'placeCategory',
        'placeCategoryDetail',
      ],
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

// 장소 상세 정보
const getByOne: RequestHandler = async (req, res, next) => {
  const placeId: number = parseInt(req.query.id as string);
  if (!placeId) return res.status(403).send('비정상적인 접근입니다.');
  try {
    const result = await Place.findOne({ where: { id: placeId }, include: { model: Menu } });
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

// 좌표에 따른 검색
const getByLocation: RequestHandler = async (req, res, next) => {
  const latitude: number = parseFloat(req.query.latitude as string);
  const longitude: number = parseFloat(req.query.longitude as string);
  if (!latitude || !longitude) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    const result = await Place.findAll();
    // sequelize의 order 함수로 sort하면 더 효율적일 것 같은데, order에 custom 함수가 안들어가는듯..
    // 부득이하게 js로 sort 진행
    result.sort(function (a: PlaceAttributes, b: PlaceAttributes) {
      const a_distance = getDistance(
        a.addressLocation[0],
        a.addressLocation[1],
        latitude,
        longitude,
      );
      const b_distance = getDistance(
        b.addressLocation[0],
        b.addressLocation[1],
        latitude,
        longitude,
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
const getByName: RequestHandler = async (req, res, next) => {
  const name: string = req.query.name as string;
  if (!name) return res.status(400).end();
  try {
    const result = await Place.findAll({
      where: {
        // Op를 사용하여 유사 검색 구현: name을 포함하기만 하면 찾음
        placeName: {
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

const createPlace: RequestHandler = async (req, res, next) => {
  const {
    addressLocation,
    addressExact,
    addressCategory,
    pictureLink,
    placeName,
    placeTime,
    placePhoneNum,
    naverLink,
    catchTableLink,
    instaLink,
    placeHashtag,
    placeCategory,
    placeCategoryDetail,
    placePrice,
    scrapCount,
    dateConcept,
    writer,
  }: PlaceAttributes = req.body;
  const { menu } = req.body;
  if (
    !addressLocation ||
    !addressExact ||
    !addressCategory ||
    !placeName ||
    !placeCategory ||
    !placeCategoryDetail ||
    !placePrice ||
    !dateConcept
  ) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    // place table 생성
    const placeResult = await Place.create({
      addressLocation,
      addressExact,
      addressCategory,
      pictureLink,
      placeName,
      placeTime,
      placePhoneNum,
      naverLink,
      catchTableLink,
      instaLink,
      placeHashtag,
      placeCategory,
      placeCategoryDetail,
      placePrice,
      scrapCount,
      dateConcept,
      writer,
      // primary 값이기 때문에 temp 값을 넣어줌.
      sourceId: 'temp',
    });
    await Place.update({ sourceId: `place_${placeResult.id}` }, { where: { id: placeResult.id } });
    // menu가 존재한다면
    if (menu) {
      const { menuName, menuPrice, menuPicture, isRecommend } = menu;
      // menu table 생성
      const menuResult = await Menu.create({
        placeId: placeResult.id,
        menuName,
        menuPrice,
        menuPicture,
        isRecommend,
        sourceId: 'temp',
      });

      Menu.update({ sourceId: `menu_${menuResult.id}` }, { where: { id: menuResult.id } });
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
    // next는 에러를 넘겨주는 역할.
    next(error);
  }
};

const updatePlace: RequestHandler = async (req, res, next) => {};

module.exports = {
  getByMap,
  getByOne,
  getByLocation,
  getByName,
  createPlace,
  updatePlace,
};
