"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// place 테이블 생성
const PlaceModel = (sequelize) => {
    const Place = sequelize.define("place", {
        // id: {
        //   type: DataTypes.INTEGER,
        //   primaryKey: true,
        //   autoIncrement: true,
        // },
        address_location: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: false,
        },
        address_exact: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false,
        },
        address_category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        picture_link: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
        place_Name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        place_Time: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
        place_phoneNum: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        naver_link: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        catch_table_link: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        insta_link: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        place_hashtag: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
        place_category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        place_category_detail: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        place_price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        scrab_count: {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 0,
        },
        date_concept: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        writer: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: false,
        modelName: 'Place',
        tableName: 'places',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    return Place;
};
exports.default = PlaceModel;
