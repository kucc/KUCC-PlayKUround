export const makeBlob = (dataURI: string) => {
  // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
  const byteString = window.atob(dataURI.split(',')[1]);
  // Blob를 구성하기 위한 준비
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ia], {
    type: 'image/jpeg',
  });
  return new File([blob], 'image.jpg');
};
