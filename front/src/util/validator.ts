// 숫자 외의 문자를 모두 없애는 함수
export const removeNonNumericCharacters = (str: string) => str.replace(/[^0-9]/g, '');

// 전화번호 정규식 검사
export const isValidPhoneNumber = (str: string) => {
  const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
  return regExp.test(str);
};

// 하이픈 없는 전화번호 정규식 검사
export const isValidPhoneNumberWithoutHyphen = (str: string) => {
  const regExp = /^\d{10,11}$/;
  return regExp.test(str);
};
