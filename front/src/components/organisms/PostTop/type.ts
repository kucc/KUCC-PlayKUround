import { ImageProps } from 'interfaces/user';

export interface postTopProps {
  userId: number;
  postId: number;
  likesCount: number;
  isLiked: boolean;
  setModalVisible: (value: boolean) => void;
  createdAt: string;
  userName: string;
  userImage: ImageProps | null;
}
