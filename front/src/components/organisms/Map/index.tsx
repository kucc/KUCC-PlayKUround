import React, { useState } from 'react';

import { PlaceType } from 'interfaces/place';

import CourseMap from './CourseMap';
import NormalMap from './NormalMap';

export const Map = ({ places }: { places: PlaceType[] }) => {
  const [isCourseMode, setIsCourseMode] = useState(false);

  // Todo
  // 위치 정보 동의 안했을 때 대응
  // 로딩 표시

  return (
    <>
      {isCourseMode ? (
        <CourseMap places={places} setCourseMode={() => setIsCourseMode(prev => !prev)} />
      ) : (
        <NormalMap places={places} setCourseMode={() => setIsCourseMode(prev => !prev)} />
      )}
    </>
  );
};
