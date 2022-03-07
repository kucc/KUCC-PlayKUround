import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { CardArray, Footer, MainSelect, MainToggleBar } from '@components';

import { getByFilterAPI, getByMapAPI } from 'apis/place';

import { SendCategoryContext } from '@contexts/sendCategory';

import { Map } from '../Map';
import { StlyedMainTableTop, StyledMainTable } from './styled';

export const MainTable = () => {
  // 기본 값은 고려대
  const [value, setValue] = useState<'close' | 'rate' | 'review'>('close');
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [currentMode, setCurrentMode] = useState<string>('table');
  const { categoryList } = useContext(SendCategoryContext);

  const { data: places, isLoading } = useQuery(
    [
      'place',
      // category
      categoryList[0] ?? '',
      // categoryDetail
      categoryList[1] ?? '',
      value,
      // area
      '',
      latitude,
      longitude,
    ],
    getByFilterAPI,
  );
  const { data: map } = useQuery('place', getByMapAPI);

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
      return isLoading || !latitude || !longitude ? (
        <Skeleton active />
      ) : (
        <CardArray places={places} />
      );
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
      <Footer />
    </StyledMainTable>
  );
};
