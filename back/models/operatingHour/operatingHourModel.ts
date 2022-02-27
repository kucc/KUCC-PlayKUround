import { DataTypes, Sequelize } from 'sequelize';

import { OperatingHourInterface } from './operatingHourType';

// place 테이블 생성
const OperatingHourModel = (sequelize: Sequelize) => {
  const OperatingHour = sequelize.define<OperatingHourInterface>(
    'operatingHour',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      placeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      default: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      breakTime: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Monday: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Tuesday: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Wednesday: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Thursday: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Friday: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Saturday: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      Sunday: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'OperatingHour',
      tableName: 'operatingHours',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return OperatingHour;
};

export default OperatingHourModel;
