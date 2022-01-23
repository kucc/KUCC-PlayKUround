
import { PlaceInterface } from "./placeType";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";

// place 테이블 생성
const PlaceModel = (sequelize : Sequelize) => {
  const Place = sequelize.define<PlaceInterface>(
    "place", 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address_location: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      address_exact: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      address_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture_link: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      place_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place_Time: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      place_phoneNum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      naver_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      catch_table_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      insta_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      place_hashtag: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      place_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place_category_detail: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      place_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scrab_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      date_concept: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      writer : {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
        timestamps: true,
        underscored: false,
        modelName: 'Place',
        tableName: 'places',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    }
  )

  return Place
}

export default PlaceModel

