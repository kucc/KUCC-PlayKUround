import { ImageProps } from 'interfaces/image';

export interface postProfileProps {
  createdAt: string;
  writerName: string;
  writerImage: ImageProps | null;
}
