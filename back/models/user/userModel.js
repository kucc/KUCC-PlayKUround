"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *          format: email
 *          description: Email for the user, needs to be unique
 *        password:
 *          type: string
 *          format: password
 *      example:
 *        name: HJun
 *        email: jjs01hwang@gmail.com
 *        password: 1234
 *
 */
// users 테이블 생성
const UserModel = (sequelize) => {
    const User = sequelize.define("user", {
        // allowNull과 optional의 차이??
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(30),
            allowNull: false,
            // trim: true,
            unique: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
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
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 0,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        token: {
            type: sequelize_1.DataTypes.STRING,
        },
        tokenExp: {
            type: sequelize_1.DataTypes.INTEGER,
        }
    }, {
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    return User;
};
exports.default = UserModel;
