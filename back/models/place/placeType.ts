import { Model, Optional } from 'sequelize/types';

export interface PlaceAttributes {
  id?: number;
  // 위도, 경도
  addressLocation: number[];
  // 정확한 좌표
  addressExact: string;
  addressCategory: '혜화' | '안암' | '성신여대';
  pictureLink: string[];
  placeName: string;
  placeDescription: string;
  placeTime: string[];
  placePhoneNum: string;
  naverLink: string;
  catchTableLink: string;
  instaLink: string;
  placeCategory: string;
  placeCategoryDetail: number;
  placePrice: 'free' | 'low' | 'mid';
  // 메뉴는 따로 모델 만들어서 연결시켜 줘야 할듯
  scrapCount: number;
  ratingCount: number;
  ratingNumber: number;
  dateConcept: '동적' | '비동적' | '체험';
  writer: number;
  sourceId?: string;
}

interface PlaceCreationAttributes
  extends Optional<
    PlaceAttributes,
    | 'id'
    | 'pictureLink'
    | 'placeTime'
    | 'placePhoneNum'
    | 'naverLink'
    | 'catchTableLink'
    | 'scrapCount'
    | 'ratingCount'
    | 'ratingNumber'
    | 'sourceId'
  > {}

export interface PlaceInterface
  extends Model<PlaceAttributes, PlaceCreationAttributes>,
    PlaceAttributes {}
