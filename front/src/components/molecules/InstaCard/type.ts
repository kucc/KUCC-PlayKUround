import { CommentType, ImageType, PlaceType } from 'interfaces';

export type InstaCardProps = {
  titleText: string;
  placeText?: string;
  likesCount: number;
  CarouselList: Array<any>;
  description?: string;
  comments?: CommentType[];
  isLiked?: boolean;
  writerName?: string | null;
  writerImage?: ImageType | null;
  userId?: number | null;
  postId?: number;
  createdAt?: string;
  place: PlaceType;
  setModalVisible: (value: boolean) => void;
};
