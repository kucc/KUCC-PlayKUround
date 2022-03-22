import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { CourseInterface } from './courseType';

// course 테이블 생성
const CourseModel = (sequelize: Sequelize) => {
  const Course = sequelize.define<CourseInterface>(
    'course',
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
      CourseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CourseDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CoursePhoneNum: {
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
      CourseCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CourseCategoryDetail: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CoursePrice: {
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
      modelName: 'Course',
      tableName: 'courses',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return Course;
};

export default CourseModel;
