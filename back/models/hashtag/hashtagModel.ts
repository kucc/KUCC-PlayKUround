import { DataTypes, Sequelize } from 'sequelize';

import { HashtagInterface } from './hashtagType';

// place 테이블 생성
const HashtagModel = (sequelize: Sequelize) => {
  const Hashtag = sequelize.define<HashtagInterface>(
    'hashtag',
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
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
