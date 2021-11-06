const Sequelize = require('sequelize');

// users 테이블 생성
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
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
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
