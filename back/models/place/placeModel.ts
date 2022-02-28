import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { PlaceInterface } from './placeType';

// place 테이블 생성
const PlaceModel = (sequelize: Sequelize) => {
  const Place = sequelize.define<PlaceInterface>(
    'place',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      addressLocation: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      addressExact: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      addressCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placeDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placePhoneNum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      naverLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      catchTableLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      instaLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      placeCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placeCategoryDetail: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      placePrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scrapCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      ratingCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      ratingNumber: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      commentCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dateConcept: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      writer: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sourceId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'Place',
      tableName: 'places',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return Place;
};

export default PlaceModel;
