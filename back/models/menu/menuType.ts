import { Model, Optional } from 'sequelize/types';

export interface MenuAttributes {
  id?: number;
  placeId: number | undefined;
  menuName: string;
  menuPrice: number;
  menuPicture: string[];
  isRecommend: boolean;
  sourceId?: string;
}

interface MenuCreationAttributes
  extends Optional<MenuAttributes, 'id' | 'menuPrice' | 'menuPicture' | 'isRecommend'> {}

export interface MenuInterface
  extends Model<MenuAttributes, MenuCreationAttributes>,
    MenuAttributes {}
