import React, { useState } from 'react';

import CourseMap from './CourseMap';
import NormalMap from './NormalMap';

const Map = () => {
  const [isCourseMode, setIsCourseMode] = useState(false);

  return (
    <>
      {isCourseMode ? (
        <CourseMap setCourseMode={() => setIsCourseMode(prev => !prev)} />
      ) : (
        <NormalMap setCourseMode={() => setIsCourseMode(prev => !prev)} />
      )}
    </>
  );
};

export default Map;
