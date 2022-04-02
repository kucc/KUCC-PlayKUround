import React, { useState } from 'react';

import { PlaceType } from 'interfaces';

import CourseMap from './CourseMap';
import NormalMap from './NormalMap';

export const Map = ({
  places,
  longitude,
  latitude,
  getLocation,
}: {
  places: PlaceType[];
  longitude: number;
  latitude: number;
  getLocation: () => Promise<void>;
}) => {
  const [isCourseMode, setIsCourseMode] = useState<boolean>(false);

  // Todo
  // 위치 정보 동의 안했을 때 대응
  // 로딩 표시

  return (
    <>
      {isCourseMode ? (
        <CourseMap
          longitude={longitude}
          latitude={latitude}
          places={places}
          setCourseMode={() => setIsCourseMode(prev => !prev)}
        />
      ) : (
        <NormalMap
          longitude={longitude}
          latitude={latitude}
          places={places}
          setCourseMode={() => setIsCourseMode(prev => !prev)}
        />
      )}
    </>
  );
};
