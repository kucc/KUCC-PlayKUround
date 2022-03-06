import { Model, Optional } from 'sequelize/types';

export interface MenuAttributes {
  id?: number;
  placeId: number | undefined;
  menuName: string;
  menuPrice: number;
  isRecommend: boolean;
  sourceId?: string;
}

interface MenuCreationAttributes
  extends Optional<MenuAttributes, 'id' | 'menuPrice' | 'isRecommend'> {}

export interface MenuInterface
  extends Model<MenuAttributes, MenuCreationAttributes>,
    MenuAttributes {}
