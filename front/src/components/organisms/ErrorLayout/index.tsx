import React from 'react';

import router from 'next/router';

import { Avatar, BackIconWithNavbar, Text } from '@components';

import { ContentLayout, TextLayout } from './styled';
import { ErrorProps } from './type';

export const ErrorLayout = ({ isNavbar = true, mainTextArray, subTextArray }: ErrorProps) => {
  const renderMainText = () => {
    if (mainTextArray) {
      return (
        <>
          {mainTextArray.map((mainText: string) => (
            <Text h6 bold>
              {mainText}
            </Text>
          ))}
        </>
      );
    }
  };

  const renderSubText = () => {
    if (subTextArray) {
      return (
        <>
          {subTextArray.map((subText: string) => (
            <Text subtitle2 medium>
              {subText}
            </Text>
          ))}
        </>
      );
    }
  };

  return (
    <>
      {isNavbar && <BackIconWithNavbar text='오류에요 ㅠㅠ' />}
      <ContentLayout>
        <Avatar size={205} imageSource={'/pictures/crying-tiger.png'} />
        {mainTextArray && <TextLayout>{renderMainText()}</TextLayout>}
        {subTextArray && <TextLayout paddingTop={'24px'}>{renderSubText()}</TextLayout>}
      </ContentLayout>
    </>
  );
};
