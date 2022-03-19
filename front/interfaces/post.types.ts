import { CommentType } from './comment.types';
import { BaseModelType } from './general.types';
import { ImageType } from './image.types';
import { PlaceType } from './place.types';
import { UserType } from './user.types';

export interface PostType extends BaseModelType {
  placeId: number;
  description: string;
  likeNum: number;
  sourceId: string;
  comments: CommentType[];
  images: ImageType[];
  place: PlaceType;
  writer: number;
  user: UserType;
  isLiked: boolean;
}
