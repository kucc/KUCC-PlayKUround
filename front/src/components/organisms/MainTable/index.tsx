import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, MainSelect, MainToggleBar } from '@components';

import { getByCommentAPI, getByLocationAPI, getByMapAPI, getByRateAPI } from 'apis/place';
import { PlaceType } from 'interfaces/place';

import { MakeTableListContext } from '@contexts/tableList';

import { Map } from '../Map';
import { StlyedMainTableTop, StyledMainTable } from './styled';

export const MainTable = () => {
  // 기본 값은 고려대
  const [value, setValue] = useState<'close' | 'rate' | 'review'>('close');
  const [latitude, setLatitude] = useState<number>(37.5908);
  const [longitude, setLongitude] = useState<number>(127.0278);
  const [currentMode, setCurrentMode] = useState<string>('table');

  const { data: locationSorted, isLoading: locationLoading } = useQuery(
    ['place', latitude, longitude],
    getByLocationAPI,
    {
      enabled: value === 'close',
    },
  );
  const { data: reviewSorted, isLoading: reviewLoading } = useQuery('place', getByCommentAPI, {
    enabled: value === 'review',
  });
  const { data: rateSorted, isLoading: rateLoading } = useQuery('place', getByRateAPI, {
    enabled: value === 'rate',
  });
  const { data: map, isLoading: mapLoading } = useQuery('place', getByMapAPI);

  // TODO: tableList를 어떻게 사용할지 백이랑 협의하기
  const { tableList } = useContext(MakeTableListContext);
  const places = locationSorted || reviewSorted || rateSorted;
  const isLoading = locationLoading || reviewLoading || rateLoading || mapLoading;

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
      return isLoading ? <Skeleton active /> : <CardArray places={places as PlaceType[]} />;
    } else {
      return <Map places={map} />;
    }
  };

  return (
    <StyledMainTable>
      <StlyedMainTableTop>
        <MainToggleBar currentMode={currentMode} setCurrentMode={setCurrentMode} />
        {currentMode === 'table' && <MainSelect value={value} setValue={setValue} />}
      </StlyedMainTableTop>
      <div style={{ marginTop: '8px' }}>{renderMainItem()}</div>
    </StyledMainTable>
  );
};
