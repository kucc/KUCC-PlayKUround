import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { Card, MainToggleBar } from '@components';

import { getByLocationAPI } from 'apis/place';
import { PlaceType } from 'interfaces/place';

import Review from '@assets/icons/review.svg';
import Scrap from '@assets/icons/scrap.svg';
import Star from '@assets/icons/star.svg';

import { Map } from '../Map';
import { StyledCardContainer } from './styled';

export const MainTable = () => {
  // 기본 값은 고려대
  const [latitude, setLatitude] = useState<number>(37.5908);
  const [longitude, setLongitude] = useState<number>(127.0278);
  const [currentMode, setCurrentMode] = useState<string>('table');
  const { data: places, isLoading } = useQuery(['user', latitude, longitude], getByLocationAPI);

  // 공통 함수에 집어넣기
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const description =
    'No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한 설명입니다.No.1 만화카페에 관한';

  const renderMainItem = () => {
    if (currentMode === 'table') {
      return isLoading ? (
        <Skeleton active />
      ) : (
        <StyledCardContainer>
          {places?.map((place: PlaceType, key: number) => {
            const { placeName, scrapCount } = place;
            const ChipGroupList = [
              {
                nonClickedIcon: <Scrap width='9.74' height='11.53' />,
                label: scrapCount,
              },
              {
                nonClickedIcon: <Star />,
                label: '4.9',
              },
              {
                nonClickedIcon: <Review />,
                label: '20',
              },
            ];
            return (
              <Card
                key={`card_${key}`}
                title={placeName}
                description={description}
                ChipGroupList={ChipGroupList}
              />
            );
          })}
        </StyledCardContainer>
      );
    } else {
      return <Map places={places} />;
    }
  };

  return (
    <div className='side-padding'>
      <MainToggleBar currentMode={currentMode} setCurrentMode={setCurrentMode} />
      {renderMainItem()}
    </div>
  );
};
