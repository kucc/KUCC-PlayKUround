"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
// 이름에 의한 검색
const getByName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.name;
    if (!name)
        return res.status(400).end();
    try {
        const result = yield models_1.Place.findAll({
            where: {
                // Op를 사용하여 유사 검색 구현: name을 포함하기만 하면 찾음 
                place_Name: {
                    [Op.like]: "%" + name + "%"
                }
            }
        });
        res.status(200).json({
            success: true, result
        });
    }
    catch (error) {
        res.status(400).json({ success: false, error });
        next(error);
    }
});
const createPlace = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { address_location, address_exact, address_category, picture_link, place_Name, place_Time, place_phoneNum, naver_link, catch_table_link, insta_link, place_hashtag, place_category, place_category_detail, place_price, scrab_count, date_concept, writer } = req.body;
    if (!address_location ||
        !address_exact ||
        !address_category ||
        !place_Name ||
        !place_category ||
        !place_category_detail ||
        !place_price ||
        !date_concept) {
        return res.status(403).send('필수인 정보가 입력되지 않았습니다.');
    }
    try {
        yield models_1.Place.create({
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
    }
    catch (error) {
        res.status(400).json({ success: false, error });
        // next는 에러를 넘겨주는 역할.
        // next(error);
    }
});
module.exports = {
    getByName,
    createPlace
};
