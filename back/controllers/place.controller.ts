import { NextFunction, Request, RequestHandler, Response } from 'express';

import { Comment, Hashtag, Menu, Place, User } from '../models';
import { PlaceAttributes } from '../models/place/placeType';
import { getDistance, mainAttributes } from './utils';

const sequelize = require('sequelize');

const Op = sequelize.Op;

const getByCategory: RequestHandler = async (req, res, next) => {
  const { category, categoryDetail } = req.query;
  try {
    const result = await Place.findAll({
      where: {
        placeCategory: category,
        placeCategoryDetail: categoryDetail,
      },
      attributes: mainAttributes,
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

// 댓글 개수에 따라 불러오기
const getByComment: RequestHandler = async (req, res, next) => {
  try {
    const result = await Place.findAll({
      order: [['commentCount', 'DESC']],
      attributes: mainAttributes,
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

// 지역에 따라 불러오기
const getByArea: RequestHandler = async (req, res, next) => {
  const area: string = req.query.area as string;
  const validateArea = ['혜화', '안암', '성신여대'];
  if (validateArea.includes(area) === false)
    return res.status(403).send('유효한 값 ("혜화", "안암", "성신여대")이 아닙니다.');
  try {
    const result = await Place.findAll({
      where: { addressCategory: area },
      attributes: mainAttributes,
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

// 별점순으로 불러오기
const getByRate: RequestHandler = async (req, res, next) => {
  try {
    const result = await Place.findAll({
      order: [['ratingNumber', 'DESC']],
      attributes: mainAttributes,
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
    const result = await Place.findOne({
      where: { id: placeId },
      include: [{ model: Menu }, { model: Comment }],
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

// 좌표에 따른 검색
const getByLocation: RequestHandler = async (req, res, next) => {
  const latitude: number = parseFloat(req.query.latitude as string);
  const longitude: number = parseFloat(req.query.longitude as string);
  if (!latitude || !longitude) {
    return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
  }
  try {
    const result = await Place.findAll({
      attributes: mainAttributes,
    });
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
      attributes: mainAttributes,
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
    placeDescription,
    placeTime,
    placePhoneNum,
    naverLink,
    catchTableLink,
    instaLink,
    placeCategory,
    placeCategoryDetail,
    placePrice,
    dateConcept,
    writer,
  }: PlaceAttributes = req.body;
  const { menu } = req.body;
  if (
    !addressLocation ||
    !addressExact ||
    !addressCategory ||
    !placeName ||
    !placeDescription ||
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
      placeDescription,
      placeTime,
      placePhoneNum,
      naverLink,
      catchTableLink,
      instaLink,
      placeCategory,
      placeCategoryDetail,
      placePrice,
      dateConcept,
      writer,
      // primary 값이기 때문에 temp 값을 넣어줌.
      sourceId: 'temp',
    });
    // 자주 사용할 placeId이기 때문에 변수화
    const placeId = placeResult.id;
    // Place 생성 후 동일한 sourceId 값을 넣어줌.
    await Place.update({ sourceId: `place_${placeId}` }, { where: { id: placeId } });
    // menu가 존재한다면
    if (menu) {
      const { menuName, menuPrice, menuPicture, isRecommend } = menu;
      // menu table 생성
      const menuResult = await Menu.create({
        placeId,
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

const ratePlace: RequestHandler = async (req, res, next) => {
  const { userId, placeId, userRateNum } = req.body;
  const userResult = await User.findOne({ where: { id: userId } });
  const placeResult = await Place.findOne({ where: { id: placeId } });
  const { rateList } = userResult as any;
  const rateListArray = Object.values(rateList);
  const updateUserRateList = rateList;

  // 예외 처리
  if (!userResult) return res.status(404).send('존재하지 않는 유저입니다.');
  if (!placeResult) return res.status(404).send('존재하지 않는 장소입니다.');
  try {
    if (rateList && rateListArray.includes(placeId)) {
      // 일단 return 시키는데 rate를 취소하거나 수정하고 싶을 경우에 대응해야 함. (다른 api 생성?)
      return res.status(400).send('이미 별점을 준 장소입니다.');
    }
    // place 처리, ratingNumber : 별점, ratingCount : 사람수
    const { ratingNumber, ratingCount } = placeResult;
    await Place.update(
      { ratingNumber: (ratingNumber * ratingCount + userRateNum) / (ratingCount + 1) },
      { where: { id: placeId } },
    );
    await placeResult?.increment('ratingCount', { by: 1 });
    // user 처리
    updateUserRateList[rateListArray.length] = placeId;
    await User.update({ rateList: updateUserRateList }, { where: { id: userId } });
    return res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

// default 값은 프론트에서 받아와야 함.
const updatePlace: RequestHandler = async (req, res, next) => {};

module.exports = {
  getByCategory,
  getByComment,
  getByArea,
  getByRate,
  getByMap,
  getByOne,
  getByLocation,
  getByName,
  createPlace,
  updatePlace,
  ratePlace,
};
