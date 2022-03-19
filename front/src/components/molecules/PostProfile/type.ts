import { ImageType } from 'interfaces';

export interface postProfileProps {
  createdAt: string;
  writerName: string;
  writerImage: ImageType | null;
}
