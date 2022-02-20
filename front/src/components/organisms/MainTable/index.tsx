import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, MainSelect, MainToggleBar, ToggleDark } from '@components';

import { getByLocationAPI } from 'apis/place';

import { Map } from '../Map';
import { StlyedMainTableTop, StyledMainTable } from './styled';

export const MainTable = () => {
  // 기본 값은 고려대
  const [latitude, setLatitude] = useState<number>(37.5908);
  const [longitude, setLongitude] = useState<number>(127.0278);
  const [currentMode, setCurrentMode] = useState<string>('table');
  const { data: places, isLoading } = useQuery(['user', latitude, longitude], getByLocationAPI);

  // 공통 함수에 집어넣기
  const getLocation = async () => {
    const pos: any = await new Promise((resovle, reject) => {
      navigator.geolocation.getCurrentPosition(resovle, reject);
    });
    setLatitude(pos.coords.latitude);
    setLongitude(pos.coords.longitude);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const renderMainItem = () => {
    if (currentMode === 'table') {
      return isLoading ? <Skeleton active /> : <CardArray places={places} />;
    } else {
      return <Map places={places} />;
    }
  };

  return (
    <StyledMainTable>
      <StlyedMainTableTop>
        <MainToggleBar currentMode={currentMode} setCurrentMode={setCurrentMode} />
        <MainSelect />
      </StlyedMainTableTop>
      <div style={{ marginTop: '8px' }}>{renderMainItem()}</div>
    </StyledMainTable>
  );
};
