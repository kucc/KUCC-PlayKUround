import dayjs from 'dayjs';

export const getDate = date => {
  return dayjs(date).format('YYYY년 MM월 DD일');
};

export const getTime = date => {
  return dayjs(date).format('HH시 mm분');
};

export const getPostDate = (date, suffix) => {
  return `${dayjs(date).format('YYYY년 MM월 DD일 HH시 mm분')}${suffix || ''}`;
};

export const getDifferentDate = date => {
  return dayjs(dayjs()).diff(date, 'minute');
};

export const getDifferentDateString = date => {
  const diff = getDifferentDate(date);

  switch (true) {
    case diff < 1:
      return '방금 전';
    case diff < 60:
      return `${diff}분 전`;
    case diff < 60 * 24:
      return `${Math.floor(diff / 60)}시간 전`;
    case diff < 60 * 24 * 30:
      return `${Math.floor(diff / 60 / 24)}일 전`;
    case diff < 60 * 24 * 365:
      return `${Math.floor(diff / 60 / 24 / 30)}달 전`;
    default:
      return `${Math.floor(diff / 60 / 24 / 365)}년 전`;
  }
};
