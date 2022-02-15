import { DataTypes, Sequelize } from 'sequelize';

import { CommentInterface } from './commentType';

// comment 테이블 생성
const CommentModel = (sequelize: Sequelize) => {
  const CommentItem = sequelize.define<CommentInterface>(
    'comment',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      writer: {
        type: DataTypes.INTEGER,
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
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return CommentItem;
};

export default CommentModel;
