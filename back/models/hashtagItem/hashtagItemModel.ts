import { DataTypes, Sequelize } from 'sequelize';

import { HashtagItemInterface } from './hashtagItemType';

// place 테이블 생성
const HashtagItemModel = (sequelize: Sequelize) => {
  const HashtagItem = sequelize.define<HashtagItemInterface>(
    'hashtagItem',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      // place, post 등과 연결
      source: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      //hashtag와 연결
      hashtag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'HashtagItem',
      tableName: 'hashtagItems',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return HashtagItem;
};

export default HashtagItemModel;
