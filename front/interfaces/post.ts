import { PlaceType } from './place';
import User from './user';

export default interface Post {
  id?: number;
  placeId?: number;
  description?: string;
  likeNum?: number;
  sourceId?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  comments?: Array<any>;
  image?: string;
  images: Array<any>;
  place: PlaceType;
  isLiked: boolean;
  writer: number;
  user: User;
}
