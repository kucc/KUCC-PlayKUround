import { SimplePlaceType } from './place';

interface imageProps {
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
  image: imageProps;
  sourceId: string;
  postList: number[];
  courseList: number[];
  scrapList: string[];
  likeList: string[];
  rateList: string[];
  historyList: string[];
}
