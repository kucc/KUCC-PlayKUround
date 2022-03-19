import React from 'react';

import { Avatar, BackIconWithNavbar, Text } from '@components';

import { ContentLayout, TextLayout } from './styled';
import { ErrorProps } from './type';

export const ErrorLayout = ({ isNavbar = true, mainTextArray, subTextArray }: ErrorProps) => {
  const renderMainText = () => {
    if (mainTextArray) {
      return (
        <React.Fragment>
          {mainTextArray.map((mainText: string) => (
            <Text h6 bold primary>
              {mainText}
            </Text>
          ))}
        </React.Fragment>
      );
    }
  };

  const renderSubText = () => {
    if (subTextArray) {
      return (
        <React.Fragment>
          {subTextArray.map((subText: string) => (
            <Text subtitle2 medium primary>
              {subText}
            </Text>
          ))}
        </React.Fragment>
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
