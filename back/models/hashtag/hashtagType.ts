import { Model, Optional } from 'sequelize/types';

export interface HashtagAttributes {
  id?: number;
  content: string;
  source: string;
}

interface HashtagCreationAttributes extends Optional<HashtagAttributes, 'id'> {}

export interface HashtagInterface
  extends Model<HashtagAttributes, HashtagCreationAttributes>,
    HashtagAttributes {}
