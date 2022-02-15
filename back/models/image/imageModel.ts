import { DataTypes, Sequelize } from 'sequelize';

import { ImageInterface } from './imageType';

// place 테이블 생성
const ImageModel = (sequelize: Sequelize) => {
  const Image = sequelize.define<ImageInterface>(
    'image',
    {
      path: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'Image',
      tableName: 'images',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return Image;
};

export default ImageModel;
