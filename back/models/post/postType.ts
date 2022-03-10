import { Model, Optional } from 'sequelize/types';

export interface PostAttributes {
  id?: number;
  placeId: number;
  description: string;
  likeNum?: number;
  sourceId?: string;
  isLiked?: boolean;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id' | 'likeNum' | 'isLiked'> {}

export interface PostInterface
  extends Model<PostAttributes, PostCreationAttributes>,
    PostAttributes {}
