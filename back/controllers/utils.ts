// controller에서 자주 쓰이는 대상들 함수화
import { User } from '../models';
import { PostInterface } from '../models/post/postType';

// 위도, 경도가 주어지면 거리 구하기 함수 (자주 쓰이므로 분리)
// haversine 라이브러리를 사용해도 되지만 아마 이게 더 효율적일듯??
export const getDistance = (
  currentLatitude: number,
  currentLongitude: number,
  targetLatitude: number,
  targetLongitude: number,
) => Math.sqrt((currentLatitude - targetLatitude) ** 2 + (currentLongitude - targetLongitude) ** 2);

export const checkUserLikedList = async (
  userId: number | undefined,
  postResult: PostInterface[],
) => {
  const result: PostInterface[] = [];
  let userResult: any;
  if (userId) {
    userResult = await User.findOne({ where: { id: userId } });
  }
  postResult.map(post => {
    const plainPost = post.get({ plain: true });
    let newPost: any;
    if (userResult?.likeList?.includes(post.id as any)) {
      newPost = { ...plainPost, isLiked: true };
    } else {
      newPost = { ...plainPost, isLiked: false };
    }
    result.push(newPost);
  });
  return result;
};

export const checkUserLiked = async (
  userId: number | undefined,
  postResult: PostInterface | null,
) => {
  const result = postResult?.get({ plain: true });
  let userResult: any;
  if (userId) {
    userResult = await User.findOne({ where: { id: userId } });
  }
  let newPost: any;
  if (userResult?.likeList?.includes(result?.id as any)) {
    newPost = { ...result, isLiked: true };
  } else {
    newPost = { ...result, isLiked: false };
  }
  return newPost;
};

// 메인 페이지 렌더링 시 필요한 attributes
export const mainAttributes = [
  'id',
  'addressLocation',
  'placeName',
  'placeDescription',
  'placeCategory',
  'placeCategoryDetail',
  'scrapCount',
  'ratingCount',
  'commentCount',
  'ratingNumber',
];

export const userPostAttributes = ['name'];
