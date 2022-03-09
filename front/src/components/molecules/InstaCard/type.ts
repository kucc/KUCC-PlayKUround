export type InstaCardProps = {
  titleText: string;
  placeText?: string;
  likesCount?: number;
  CarouselList: Array<any>;
  description?: string;
  isLiked?: boolean;
  userId?: number | null;
  postId?: number;
  setModalVisible: (value: boolean) => void;
};
