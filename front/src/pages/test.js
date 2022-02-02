import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';
import { Div, MyMenuIcon, MyMenu, Text } from '@components';

import { Profile } from '../components/molecules/Profile';

const TestPage = () => {
  return (
    <>
      <Profile name = 'Jieun'>
        <Image src='/pororo.jpg' width='100%' height='100%' alt='프사' />
      </Profile>
    </>
  );
};

export default TestPage;
