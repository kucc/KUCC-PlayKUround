import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { BackIconWithNavbar, Carousel, PlaceInfo, PlaceSelectBar } from '@components';

import { getByOneAPI } from 'apis/place';
import { PlaceType } from 'interfaces/place';

import reactQueryOption from '@constants/reactQueryOption';

import { placeDetailProps } from './type';

export const PlaceDetail: React.FC<placeDetailProps> = ({ placeId }) => {
  // fetch PlaceInfo
  const { data, isLoading, isSuccess } = useQuery<PlaceType>(['place', placeId], getByOneAPI, {
    ...reactQueryOption,
    enabled: !!placeId,
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const place = data as PlaceType;

  if (!placeId || isLoading) return <Skeleton />;

  const { placeName, placeDescription, ratingNumber, commentCount, scrapCount } = place;

  return (
    <div>
      <BackIconWithNavbar text={''} />
      <PlaceInfo
        placeName={placeName}
        placeDescription={placeDescription}
        ratingNumber={ratingNumber}
        commentCount={commentCount}
        scrapCount={scrapCount}
      />
      <PlaceSelectBar setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />
      <Carousel CarouselList={place.images} height={190} />
    </div>
  );
};
