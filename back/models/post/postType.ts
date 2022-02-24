import { Model, Optional } from 'sequelize/types';

export interface PostAttributes {
  id?: number;
  placeId: number;
  description: string;
  likeNum?: number;
  sourceId?: string;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id' | 'likeNum'> {}

export interface PostInterface
  extends Model<PostAttributes, PostCreationAttributes>,
    PostAttributes {}
