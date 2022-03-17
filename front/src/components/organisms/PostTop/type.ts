import { ImageProps } from 'interfaces/image';

export interface postTopProps {
  userId: number;
  postId: number;
  likesCount: number;
  isLiked: boolean;
  setModalVisible: (value: boolean) => void;
  createdAt: string;
  writerName: string;
  writerImage: ImageProps | null;
}
