import { ImageProps } from './user';

export default interface postDetail {
  comments: Comment[];
  createdAt: string;
  placeName: string;
  userName: string;
  userImage: ImageProps | null;
  likesCount: number;
  CarouselList: ImageProps[] | null;
  isLiked: boolean;
  postId: number;
  userId: number;
}
