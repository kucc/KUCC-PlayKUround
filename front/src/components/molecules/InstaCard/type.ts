import { commentType } from 'interfaces/comment';
import { PlaceType } from 'interfaces/place';
import User, { ImagePathProps } from 'interfaces/user';

export type InstaCardProps = {
  titleText: string;
  placeText?: string;
  likesCount?: number;
  CarouselList: Array<any>;
  description?: string;
  comments?: commentType[];
  isLiked?: boolean;
  userName?: string | null;
  userImage?: ImagePathProps | null;
  userId?: number | null;
  postId?: number;
  createdAt?: string;
  place: PlaceType;
  setModalVisible: (value: boolean) => void;
};
