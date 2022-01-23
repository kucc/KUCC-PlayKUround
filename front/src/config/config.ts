// eslint-disable-next-line import/prefer-default-export
export const backUrl =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';
// 배포시 ''에 배포된 프론트 서버의 주소 써주기
