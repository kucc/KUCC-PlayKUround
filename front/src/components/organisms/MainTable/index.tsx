import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, ErrorLayout, MainSelect, MainToggleBar } from '@components';
import { Error } from '@templates';

import { getByFilterAPI, getByMapAPI } from 'apis';
import { PlaceType } from 'interfaces';

import { reactQueryOption } from '@constants';
import { filterValueContext } from '@contexts';

import { Map } from '../Map';
import { StlyedMainTableTop, StyledContentContainer, StyledMainTable } from './styled';

export const MainTable = () => {
  const [value, setValue] = useState<'close' | 'rate' | 'review'>('close');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [currentMode, setCurrentMode] = useState<string>('table');

  const { categoryList, area } = useContext(filterValueContext);

  const map = useQuery<PlaceType[]>('place', getByMapAPI, reactQueryOption);
  const places = useQuery(
    ['place', categoryList[0] ?? '', categoryList[1] ?? '', value, area, latitude, longitude],
    getByFilterAPI,
    {
      ...reactQueryOption,
      enabled: latitude && longitude ? true : false,
    },
  );

  // 공통 함수에 집어넣기
  const getLocation = async () => {
    const pos: any = await new Promise((resovle, reject) => {
      navigator.geolocation.getCurrentPosition(resovle, reject);
    });
    setLatitude(pos.coords.latitude);
    setLongitude(pos.coords.longitude);
  };

  const renderMainItem = () => {
    if (map.isLoading || map.isIdle || places.isLoading || places.isIdle) {
      return <Skeleton active />;
    } else if (map.isError || places.isError) {
      return <Error isNavbar={false} />;
    }
    if (currentMode === 'table') {
      if (places) {
        return <CardArray places={places.data} />;
      } else {
        return <ErrorLayout isNavbar={false} mainTextArray={['아직 등록된 장소가 없어요 ㅠㅠ']} />;
      }
    } else {
      return (
        <Map
          latitude={latitude as number}
          longitude={longitude as number}
          places={map.data}
          getLocation={getLocation}
        />
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <StyledMainTable>
      <StlyedMainTableTop>
        <MainToggleBar currentMode={currentMode} setCurrentMode={setCurrentMode} />
        {currentMode === 'table' && <MainSelect value={value} setValue={setValue} />}
      </StlyedMainTableTop>
      <StyledContentContainer noData={!(places && places.data) ? true : false}>
        {renderMainItem()}
      </StyledContentContainer>
    </StyledMainTable>
  );
};
