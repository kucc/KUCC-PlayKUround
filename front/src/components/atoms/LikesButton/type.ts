export type LikesButtonProps = {
  likesCountProps?: number;
  isLikedProps?: boolean;
  userId?: number | null;
  postId?: number;
  setModalVisible: (value: boolean) => void;
};
