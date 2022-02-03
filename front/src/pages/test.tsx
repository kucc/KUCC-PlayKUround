import React from 'react';
import { useQuery } from 'react-query';

import { Div, Text } from '@components';
import Map from '@components/organisms/Map';

import { getByLocationAPI } from 'apis/place';

const TestPage = () => {
  return (
    <>
      <Map />
    </>
  );
};

export default TestPage;
