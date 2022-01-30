import { Model, Optional } from 'sequelize/types';

export interface PlaceAttributes {
  id?: number;
  // 위도, 경도
  address_location: number[];
  // 정확한 좌표
  address_exact: string;
  address_category: '혜화' | '안암' | '성신여대';
  picture_link: string[];
  place_Name: string;
  place_Time: string[];
  place_phoneNum: string;
  naver_link: string;
  catch_table_link: string;
  insta_link: string;
  place_hashtag: string[];
  place_category: string;
  place_category_detail: number;
  place_price: 'free' | 'low' | 'mid';
  // 메뉴는 따로 모델 만들어서 연결시켜 줘야 할듯
  // recommended_menu : menuType
  // all_menu : menuType[]
  scrab_count: number;
  date_concept: '동적' | '비동적' | '체험';
  writer: number;
}

interface PlaceCreationAttributes
  extends Optional<
    PlaceAttributes,
    | 'id'
    | 'picture_link'
    | 'place_Time'
    | 'place_phoneNum'
    | 'naver_link'
    | 'catch_table_link'
    | 'place_hashtag'
  > {}

export interface PlaceInterface
  extends Model<PlaceAttributes, PlaceCreationAttributes>,
    PlaceAttributes {}