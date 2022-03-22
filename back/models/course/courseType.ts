import { Model, Optional } from 'sequelize/types';

export interface CourseAttributes {
  id?: number;
  // 위도, 경도
  addressLocation: number[];
  // 정확한 좌표
  addressExact: string;
  addressCategory: '혜화' | '안암' | '성신여대';
  CourseName: string;
  CourseDescription: string;
  CoursePhoneNum: string;
  naverLink: string;
  catchTableLink: string;
  instaLink: string;
  CourseCategory: string;
  CourseCategoryDetail: number;
  CoursePrice: 'free' | 'low' | 'mid';
  // 메뉴는 따로 모델 만들어서 연결시켜 줘야 할듯
  scrapCount: number;
  ratingCount: number;
  commentCount: number;
  ratingNumber: number;
  dateConcept: '동적' | '비동적' | '체험';
  writer: number;
  sourceId?: string;
  distance?: number;
}

interface CourseCreationAttributes
  extends Optional<
    CourseAttributes,
    | 'id'
    | 'CoursePhoneNum'
    | 'naverLink'
    | 'catchTableLink'
    | 'scrapCount'
    | 'ratingCount'
    | 'commentCount'
    | 'ratingNumber'
    | 'sourceId'
    | 'distance'
  > {}

export interface CourseInterface
  extends Model<CourseAttributes, CourseCreationAttributes>,
    CourseAttributes {}
