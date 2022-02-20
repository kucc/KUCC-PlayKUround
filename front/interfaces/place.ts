export interface SimplePlaceType {
  id?: number;
  addressLocation: number[];
  placeName: string;
  pictureLink: string[];
  placeCategory: string;
  placeCategoryDetail: number;
  scrapCount: number;
  ratingCount: number;
  commentCount: number;
  ratingNumber: number;
  placeDescription: string;
}

export interface PlaceType {
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
  placeHashtag: string[];
  placeCategory: string;
  placeCategoryDetail: number;
  placePrice: 'free' | 'low' | 'mid';
  scrapCount: number;
  ratingCount: number;
  commentCount: number;
  ratingNumber: number;
  dateConcept: '동적' | '비동적' | '체험';
  writer: number;
  menu: {
    menuName: string;
    menuPrice: number;
    menuPicture: Array<string>;
    isRecommended: boolean;
  };
}
