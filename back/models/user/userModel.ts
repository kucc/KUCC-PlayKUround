import { UserInterface } from "./userType";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";


// users 테이블 생성
const UserModel = (sequelize : Sequelize) => {
  const User = sequelize.define<UserInterface>(
    "user", 
    {
      // allowNull과 optional의 차이??
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
            min : {
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
        image: {
          type: DataTypes.STRING,
          allowNull: true
        },
        token: {
          type: DataTypes.STRING,
        },
        tokenExp: {
          type: DataTypes.INTEGER,
        }
      },
      {
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
  )

  return User
}

export default UserModel