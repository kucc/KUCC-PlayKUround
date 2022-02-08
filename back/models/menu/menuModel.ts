import { DataTypes, Sequelize } from 'sequelize';

import { MenuInterface } from './menuType';

// place 테이블 생성
const MenuModel = (sequelize: Sequelize) => {
  const Menu = sequelize.define<MenuInterface>(
    'menu',
    {
      placeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      menuName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      menuPrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      menuPicture: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      isRecommend: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: false,
      modelName: 'Menu',
      tableName: 'menus',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  return Menu;
};

export default MenuModel;
