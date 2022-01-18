import { Sequelize, Model, Optional, DataTypes } from "sequelize";

interface UserAttributes {
  name: string;
  email: string;
  password: string;
  lastname: string;
  role: number;
  image: string;
  token: string;
  tokenExp: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "role"> { }

export interface UserInterface extends Model<UserAttributes, UserCreationAttributes>,
  UserAttributes {
}


// users 테이블 생성
const UserModel = (sequelize: Sequelize) => {
  const User = sequelize.define<UserInterface>(
    "user",
    {
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
            args: [5],
            msg: 'Minimum 5 password Length required',
          }
        },
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(50),
      },
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      image: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
      },
      tokenExp: {
        type: DataTypes.INTEGER,
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
  ); return User;
}

export default UserModel