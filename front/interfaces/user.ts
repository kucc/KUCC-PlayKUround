import { SimplePlaceType } from './place';

export interface ImageProps {
  data: any;
  type: string;
}

export default interface User {
  id: number;
  name: string | null;
  email: string;
  role: 0 | 1;
  postList: Array<SimplePlaceType>;
  courseList: Array<SimplePlaceType>;
  scrapList: Array<SimplePlaceType>;
  liktList: Array<SimplePlaceType>;
  rateList: Array<SimplePlaceType>;
  historyList: Array<SimplePlaceType>;
  images: ImageProps;
  sourceId: string;
  likeList: string[];
}
