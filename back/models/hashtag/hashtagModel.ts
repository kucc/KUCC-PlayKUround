import { DataTypes, Sequelize } from 'sequelize';

import { HashtagInterface } from './hashtagType';

// hashtag 테이블 생성
const HashtagModel = (sequelize: Sequelize) => {
  const Hashtag = sequelize.define<HashtagInterface>(
    'hashtag',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'Hashtag',
      tableName: 'hashtags',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return Hashtag;
};

export default HashtagModel;
