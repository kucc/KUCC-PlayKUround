import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { UserInterface } from './userType';

// users 테이블 생성
const UserModel = (sequelize: Sequelize) => {
  const User = sequelize.define<UserInterface>(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        // trim: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: {
            // 배열이 맞나??
            args: [5],
            msg: 'Minimum 5 password Length required',
          },
        },
        allowNull: false,
      },
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      token: {
        type: DataTypes.STRING,
      },
      tokenExp: {
        type: DataTypes.INTEGER,
      },
      sourceId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      postList: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true,
      },
      courseList: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true,
      },
      scrabList: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true,
      },
      likeList: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true,
      },
      rateList: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return User;
};

export default UserModel;
