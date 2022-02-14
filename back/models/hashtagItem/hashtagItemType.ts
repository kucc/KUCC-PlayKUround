import { Model, Optional } from 'sequelize/types';

export interface HashtagItemAttributes {
  id?: number;
  source: string;
  hashtag_id: number | undefined;
}

interface HashtagItemCreationAttributes extends Optional<HashtagItemAttributes, 'id'> {}

export interface HashtagItemInterface
  extends Model<HashtagItemAttributes, HashtagItemCreationAttributes>,
    HashtagItemAttributes {}
