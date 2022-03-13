import { ImageProps } from './user';

export default interface postDetail {
  comments: Comment[];
  createdAt: string;
  placeName: string;
  writerName: string;
  writerImage: ImageProps | null;
  likesCount: number;
  CarouselList: ImageProps[] | null;
  isLiked: boolean;
  postId: number;
  userId: number;
  description: string;
}
