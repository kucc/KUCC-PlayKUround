export const myLocationIcon = `<img 
src="icons/my-location.svg" 
alt="my-location"
style="
  position: absolute; 
  left: 0px; 
  top: 0px;
  width: 30px;
  height: 30px;
"/>`;

export const courseRedBtnIcon = `<img style="position: absolute; top: 71px; left: 16px; alt="course-red" src="icons/course-red.svg">`;

export const courseWhiteBtnIcon =
  '<img style="position: absolute; top: 44px; right: 16px" alt="course-white" src="icons/course-white.svg">';

export const locationBtnIcon =
  '<img style="position: absolute; top: 92px; right: 16px" alt="get-location" src="icons/get-location.svg">';

// - text의 width / 2 + img의 width / 2
export const placeIcon = (placeName: string, placeIcon: string) => `
<img 
  src="icons/${placeIcon}.svg" 
  alt="${placeIcon}"
>
<div 
  style="
    position: absolute; 
    width: 60px; 
    left: -17px;
    text-align : center;
    line-height: 100%;
    top: 40px;
  "
>
  ${placeName}
<div/>`;

export const placeBigIcon = (placeName: string, placeIcon: string) => `
<div 
  style="
    position: absolute; 
    width: 60px; 
    left: -30px;
    top: 8px;
    text-align : center;
    line-height: 100%;
  "
>
  ${placeName}
<div/>`;

export const placePicture = (pictureLink: string) => `<div>
<div style="position: absolute; bottom: 10px; right: 12px; font-size: 10px; display: flex; align-items: center; color: white; z-index:10;">
  <div style="margin-top: 3.2px;">자세히 보기&nbsp;&nbsp;</div>
  <img src="icons/place-detail-white.svg"  />
</div>
<div style="width:120px; height:120px; margin:5px; border-radius: 15px; background-color: black;">
  <img style="width:120px; height:120px; border-radius: 15px;object-fit: cover; opacity: 0.8;" src="pictures/${pictureLink}" />
</div>
</div>`;

export const placeNoPicture = `
<div>
  <div style="position: absolute; bottom: 10px; right: 12px; font-size: 10px; display: flex; align-items: center;">
    <div style="margin-top: 3.2px;">자세히 보기&nbsp;&nbsp;</div>
    <img src="icons/place-detail-black.svg" />
  </div>
  <img src="pictures/no-image.svg" style="width:120px; padding:5px; border-radius: 15px;" />
</div>
`;
