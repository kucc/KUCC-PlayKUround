import { ImageProps } from 'interfaces/user';

export interface postProfileProps {
  createdAt: string;
  writerName: string;
  writerImage: ImageProps | null;
}
