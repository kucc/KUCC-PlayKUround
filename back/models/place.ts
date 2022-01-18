
// import Sequelize from 'sequelize';

import { Sequelize as TypeSequelize } from "sequelize/types";

// import 방식은 type에서 error가 나서 require 사용
const {Sequelize, Model} = require('sequelize');

// users 테이블 생성
// define해서 모델 생성하는 방식은 sequelize 객체를 어떻게 받아오는 지 몰라서, 일단 Extending model
module.exports = class Place extends Model {
  static init(sequelize : TypeSequelize) {
    return super.init(
      {
        address_location: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        address_exact: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        address_category: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        picture_link: {
          type: Sequelize.JSON,
          allowNull: true,
        },
        place_Name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        place_Time: {
          type: Sequelize.JSON,
          allowNull: true,
        },
        place_phoneNum: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        naver_link: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        catch_table_link: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        insta_link: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        place_hashtag: {
          type: Sequelize.JSON,
          allowNull: true,
        },
        place_category: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        place_category_detail: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        place_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        scrab_count: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        date_concept: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Place',
        tableName: 'places',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
};