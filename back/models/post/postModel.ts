import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { PostInterface } from './postType';

// place 테이블 생성
const PostModel = (sequelize: Sequelize) => {
  const Post = sequelize.define<PostInterface>(
    'post',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      placeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likeNum: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      sourceId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      writer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return Post;
};

export default PostModel;
