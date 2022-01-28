import { DataTypes, Sequelize } from 'sequelize';

import { MenuInterface } from './menuType';

// place 테이블 생성
const MenuModel = (sequelize: Sequelize) => {
  const Menu = sequelize.define<MenuInterface>(
    'menu',
    {
      place_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      menu_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      menu_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      menu_picture: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      is_recommend: {
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
