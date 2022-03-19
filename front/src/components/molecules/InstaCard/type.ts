import { commentType } from 'interfaces/comment';
import { ImagePathProps } from 'interfaces/image';
import { PlaceType } from 'interfaces/place';

export type InstaCardProps = {
  titleText: string;
  placeText?: string;
  likesCount?: number;
  CarouselList: Array<any>;
  description?: string;
  comments?: commentType[];
  isLiked?: boolean;
  writerName?: string | null;
  writerImage?: ImagePathProps | null;
  userId?: number | null;
  postId?: number;
  createdAt?: string;
  place: PlaceType;
  setModalVisible: (value: boolean) => void;
};
