import { BaseModelType } from './general.types';
import { ImageType } from './image.types';

export interface MenuType {
  menuName: string;
  menuPrice: number;
  menuPicture: Array<string>;
  isRecommended: boolean;
}

export interface SimplePlaceType extends BaseModelType {
  addressLocation: number[];
  placeName: string;
  images: ImageType[];
  placeCategory: string;
  placeCategoryDetail: number;
  scrapCount: number;
  distance: number;
  ratingCount: number;
  commentCount: number;
  ratingNumber: number;
  placeDescription: string;
}

export interface PlaceType extends SimplePlaceType {
  addressExact: string;
  placeDescription: string;
  placeTime: string[];
  placePhoneNum: string;
  naverLink: string;
  catchTableLink: string;
  instaLink: string;
  placePrice: 'free' | 'low' | 'mid';
  dateConcept: '동적' | '비동적' | '체험';
  writer: number;
  menu: MenuType;
  sourceId: string;
}
