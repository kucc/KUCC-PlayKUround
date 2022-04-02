import { CommentType } from './comment.types';
import { BaseModelType } from './general.types';
import { ImageType } from './image.types';

export interface PostDetailType extends BaseModelType {
  comments: CommentType[];
  createdAt: string;
  placeName: string;
  writerName: string;
  writerImage: ImageType | null;
  likesCount: number;
  CarouselList: ImageType[] | null;
  isLiked: boolean;
  userId: number;
  description: string;
}
