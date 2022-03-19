import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { BackIconWithNavbar, Carousel, PlaceInfo } from '@components';

import { getByOneAPI } from 'apis';
import { PlaceType } from 'interfaces';

import { placeDetailProps } from './type';

export const PlaceDetail: React.FC<placeDetailProps> = ({ placeId }) => {
  // fetch PlaceInfo
  const { data, isLoading, isSuccess } = useQuery<PlaceType>(['place', placeId], getByOneAPI, {
    enabled: !!placeId,
  });

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
      <Carousel CarouselList={place.images} height={190} />
    </div>
  );
};
