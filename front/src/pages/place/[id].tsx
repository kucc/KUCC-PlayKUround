import React from 'react';

import router from 'next/router';

import { PlaceDetail } from '@templates';

const placeDetail = () => {
  const { id } = router.query;
  return <PlaceDetail placeId={id as string} />;
};

export default placeDetail;
