import { commentType } from 'interfaces/comment';
import { PlaceType } from 'interfaces/place';

export type InstaCardProps = {
  titleText: string;
  placeText?: string;
  likesCount?: number;
  CarouselList: Array<any>;
  description?: string;
  comments?: commentType[];
  isLiked?: boolean;
  userId?: number | null;
  postId?: number;
  createdAt?: string;
  place: PlaceType;
  setModalVisible: (value: boolean) => void;
};
