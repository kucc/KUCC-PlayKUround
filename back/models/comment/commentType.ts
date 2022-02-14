import { Model, Optional } from 'sequelize/types';

export interface CommentAttributes {
  id?: number;
  content: string;
  writer: number;
  source: string;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> {}

export interface CommentInterface
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {}
