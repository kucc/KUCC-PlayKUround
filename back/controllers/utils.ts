// controller에서 자주 쓰이는 대상들 함수화

// 위도, 경도가 주어지면 거리 구하기 함수 (자주 쓰이므로 분리)
// haversine 라이브러리를 사용해도 되지만 아마 이게 더 효율적일듯??
export const getDistance = (
  currentLatitude: number,
  currentLongitude: number,
  targetLatitude: number,
  targetLongitude: number,
) => Math.sqrt((currentLatitude - targetLatitude) ** 2 + (currentLongitude - targetLongitude) ** 2);

// 메인 페이지 렌더링 시 필요한 attributes
export const mainAttributes = [
  'id',
  'addressLocation',
  'placeName',
  'placeDescription',
  'pictureLink',
  'placeCategory',
  'placeCategoryDetail',
  'scrapCount',
  'ratingCount',
  'commentCount',
  'ratingNumber',
];
