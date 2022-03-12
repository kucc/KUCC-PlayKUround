import { ImageProps } from 'interfaces/user';

export interface postProfileProps {
  createdAt: string;
  userName: string;
  userImage: ImageProps | null;
}
