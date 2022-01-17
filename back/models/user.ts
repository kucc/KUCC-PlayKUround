
// import Sequelize from 'sequelize';
// import 방식은 type에서 error가 나서 require 사용
const {Sequelize, Model} = require('sequelize');

// users 테이블 생성
// define해서 모델 생성하는 방식은 sequelize 객체를 어떻게 받아오는 지 몰라서, 일단 Extending model로 생성.
module.exports = class User extends Model {
  static init(sequelize : any) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(30),
          allowNull: false,
          trim: true,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          min: {
            args: [5],
            msg: 'Minimum 5 password Length required',
          },
          allowNull: false,
        },
        lastname: {
          type: Sequelize.STRING(50),
        },
        role: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        image: {
          type: Sequelize.STRING,
        },
        token: {
          type: Sequelize.STRING,
        },
        tokenExp: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
};