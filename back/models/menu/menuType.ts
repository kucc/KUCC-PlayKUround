import { Model, Optional } from 'sequelize/types';

export interface MenuAttributes {
  id?: number;
  place_id: number | undefined;
  menu_name: string;
  menu_price: number;
  menu_picture: string[];
  is_recommend: boolean;
}

interface MenuCreationAttributes
  extends Optional<MenuAttributes, 'id' | 'menu_price' | 'menu_picture' | 'is_recommend'> {}

export interface MenuInterface
  extends Model<MenuAttributes, MenuCreationAttributes>,
    MenuAttributes {}
