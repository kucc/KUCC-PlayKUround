import { NextFunction, Request, RequestHandler, Response } from 'express';
import fs from 'fs';
import haversineDistance from 'haversine-distance';

import { Comment, Hashtag, Image, Menu, OperatingHour, Place, User } from '../models';
import { MulterFile } from '../models/image/imageType';
import { PlaceAttributes, PlaceInterface } from '../models/place/placeType';
import { getDistance, mainAttributes } from './utils';

const sequelize = require('sequelize');

const Op = sequelize.Op;

const getByFilter: RequestHandler = async (req, res, next) => {
  // order : distance, comment, rate
  // area : 혜화, 안암, 성신여대, 경희대
  const { category, categoryDetail, order, area } = req.query;
  const validateArea = ['혜화', '안암', '성신여대', '경희대'];

  const latitude: number = parseFloat(req.query.latitude as string);
  const longitude: number = parseFloat(req.query.longitude as string);

  try {
    const whereCondition: any = {};
    let orderCondition: any = [];
    // 카테고리가 있으면
    if (category) whereCondition['placeCategory'] = category;
    if (categoryDetail) whereCondition['placeCategoryDetail'] = categoryDetail;
    // area가 있으면
    if (area) {
      if (validateArea.includes(area as string) === false)
        return res.status(403).send('유효한 값 ("혜화", "안암", "성신여대")이 아닙니다.');
      whereCondition['addressCategory'] = area;
    }
    // order에 따른..
    if (order === 'review') {
      orderCondition = [['commentCount', 'DESC']];
    }
    if (order === 'rate') {
      orderCondition = [['ratingNumber', 'DESC']];
    }

    const result = await Place.findAll({
      where: whereCondition,
      order: orderCondition,
      attributes: mainAttributes,
      include: Image,
    });

    const newResult: PlaceAttributes[] = [];
    result.map((place: any) => {
      const newPlace = place.get({ plain: true });
      const distance = haversineDistance(
        { longitude: place.addressLocation[1], latitude: place.addressLocation[0] },
        { longitude, latitude },
      );
      if (distance < 1000) {
        newPlace['distance'] = `${distance}m`;
      } else {
        newPlace['distance'] = `${(distance / 1000).toFixed(1)}km`;
      }
      newResult.push(newPlace);
    });

    // distance는 sequelize에서 찾은 다음 처리
    if (order === 'close') {
      if (!latitude || !longitude) {
        return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
      }
      newResult.sort(function (a: PlaceAttributes, b: PlaceAttributes) {
        return (a.distance as number) - (b.distance as number);
      });
    }
    res.status(200).json({
      success: true,
      newResult,
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
      attributes: ['id', 'addressLocation', 'placeName', 'placeCategory', 'placeCategoryDetail'],
      include: Image,
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
    const result: any = await Place.findOne({
      where: { id: placeId },
      include: [{ model: Menu }, { model: Comment }, { model: Image }, { model: OperatingHour }],
    });

    // 만약 유저 정보(세션)이 있으면, 최근 history에 sourceId를 담음.
    // course getByOne에도 똑같은 로직 구현
    if (req.user && result) {
      const { historyList } = req.user;
      const { sourceId } = result;
      if (historyList) {
        // findIndex는 해당 배열에 값이 존재하지 않으면 -1을 return
        const findIndex = historyList.indexOf(sourceId as string) as number;
        // 이미 리스트에 sourceId가 있으면..
        if (findIndex !== -1) {
          // 해당 배열에서 findIndex의 값을 삭제
          const deletedNum = historyList.splice(findIndex, 1)[0];
          // 배열의 첫번째 값에 추가
          historyList.unshift(deletedNum);
        }
        // 없으면
        else {
          // 배열의 첫번째 값에 추가
          historyList.unshift(sourceId as any);
          // 배열의 크기가 30 이상일 경우에, 배열의 맨 마지막 값 제거
          if (historyList.length > 30) historyList.pop();
        }
        await User.update({ historyList }, { where: { id: req.user.id } });
      }
    }
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
    next(error);
  }
};

const getByArr: RequestHandler = async (req, res, next) => {
  const placeString: string = req.query.placeList as string;
  const placeArray = placeString.split(',');

  try {
    const resultArray: any[] = [];
    await Promise.all(
      placeArray.map(async (placeId: string) => {
        const resultPlace = await Place.findOne({
          where: { id: placeId },
          attributes: mainAttributes,
          include: Image,
        });
        resultArray.push(resultPlace);
      }),
    );
    res.status(200).json({
      success: true,
      result: resultArray,
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
      include: Image,
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

const createPlace = async (
  req: Request & { files: MulterFile[] },
  res: Response,
  next: NextFunction,
) => {
  const {
    addressExact,
    addressCategory,
    placeName,
    placeDescription,
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
  // 배열, object 형 변환
  const addressLocation = req.body.addressLocation.map(Number);
  // String to Object
  const menu = JSON.parse(req.body.menu);
  const operatingHour = JSON.parse(req.body.operatingHour);
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
      placeName,
      placeDescription,
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
    let menuId: number | undefined;
    // Place 생성 후 동일한 sourceId 값을 넣어줌.
    await Place.update({ sourceId: `place_${placeId}` }, { where: { id: placeId } });
    // menu가 존재한다면
    // menu는 여러개를 받을 경우 따로 빼줄 예정.. (사진 받기가 곤란함)
    if (menu) {
      const { menuName, menuPrice, isRecommend } = menu;
      // menu table 생성
      const menuResult = await Menu.create({
        placeId,
        menuName,
        menuPrice,
        isRecommend,
        sourceId: 'temp',
      });
      menuId = menuResult.id;
      Menu.update({ sourceId: `menu_${menuId}` }, { where: { id: menuId } });
    }
    // 사진이 있으면
    if (req.files) {
      await Promise.all(
        req.files.map(async (file: MulterFile) => {
          const imgData = fs
            .readFileSync(`assets${file.path.split('assets')[1]}`)
            .toString('base64');
          // 장소 이미지 생성
          if (file.fieldname === 'placeImages') {
            // path는 BLOB 형식으로 저장. 프론트에서 사용시 Buffer 이용.
            await Image.create({ path: imgData, source: `place_${placeId}` });
          } else if (file.fieldname === 'menuImages' && menuId) {
            // 메뉴 이미지 생성
            await Image.create({ path: imgData, source: `menu_${menuId}` });
          }
        }),
      );
    }
    // 운영 시간이 있으면
    if (operatingHour) {
      const {
        defaultTime,
        breakTime,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
      } = operatingHour;
      // menu table 생성
      await OperatingHour.create({
        placeId,
        defaultTime,
        breakTime,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
      });
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
  getByFilter,
  getByMap,
  getByOne,
  getByArr,
  getByName,
  createPlace,
  updatePlace,
  ratePlace,
};
