import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, ErrorLayout, Footer, MainSelect, MainToggleBar } from '@components';

import { getByFilterAPI, getByMapAPI } from 'apis/place';
import { PlaceType } from 'interfaces/place';

import { filterValueContext } from '@contexts/filterValue';

import { Map } from '../Map';
import { StlyedMainTableTop, StyledContentContainer, StyledMainTable } from './styled';

export const MainTable = () => {
  const [value, setValue] = useState<'close' | 'rate' | 'review'>('close');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [currentMode, setCurrentMode] = useState<string>('table');

  const { categoryList, area } = useContext(filterValueContext);

  const map = useQuery<PlaceType[]>('place', getByMapAPI);
  const places = useQuery(
    ['place', categoryList[0] ?? '', categoryList[1] ?? '', value, area, latitude, longitude],
    getByFilterAPI,
    { enabled: latitude && longitude ? true : false },
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
      return <span>Error</span>;
    }
    if (currentMode === 'table') {
      return (
        <>
          {places.data.length ? (
            <CardArray places={places.data} />
          ) : (
            <ErrorLayout isNavbar={false} mainTextArray={['등록된 장소가 없습니다.']} />
          )}
        </>
      );
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
      <StyledContentContainer noData={!(places.data && places.data.length) ? true : false}>
        {renderMainItem()}
      </StyledContentContainer>
      <Footer />
    </StyledMainTable>
  );
};
