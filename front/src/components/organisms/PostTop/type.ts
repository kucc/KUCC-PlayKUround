import { ImageType } from 'interfaces';

export interface postTopProps {
  userId: number;
  postId: number;
  likesCount: number;
  isLiked: boolean;
  setModalVisible: (value: boolean) => void;
  createdAt: string;
  writerName: string;
  writerImage: ImageType | null;
}
