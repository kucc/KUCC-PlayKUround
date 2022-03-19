import { BaseModelType } from './general.types';
import { ImageType } from './image.types';
import { SimplePlaceType } from './place.types';

export interface UserType extends BaseModelType {
  name: string;
  email: string;
  role: 0 | 1;
  snsId: number | null;
  provider: string | null;
  token: string | null;
  tokenExp: string | null;
  postList: Array<SimplePlaceType>;
  courseList: Array<SimplePlaceType>;
  scrapList: Array<SimplePlaceType>;
  liktList: Array<SimplePlaceType>;
  rateList: Array<SimplePlaceType>;
  historyList: Array<SimplePlaceType>;
  image: ImageType;
  sourceId: string;
}
