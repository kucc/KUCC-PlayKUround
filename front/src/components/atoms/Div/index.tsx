import React from 'react';

import styled from 'styled-components';

import { DivProps } from './type';

const D = styled.div`
  &:nth-child(1) {
    height: 100vh;
  }
`;

export const Div = ({ children, style, ...props }: DivProps) => {
  const locationStyle = props.center
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }
    : props.centerH
    ? style?.flexDirection === 'row'
      ? { display: 'flex', alignItems: 'center' }
      : { display: 'flex', justifyContent: 'center' }
    : props.centerV
    ? style?.flexDirection === 'row'
      ? { display: 'flex', justifyContent: 'center' }
      : { display: 'flex', alignItems: 'center' }
    : {};

  const directionStyle = props.row
    ? { display: 'flex', flexDirection: 'row' }
    : props.col
    ? { display: 'flex', flexDirection: 'column' }
    : { display: 'flex', flexDirection: 'column' };

  return (
    <D
      // TODO: 이 부분이 왜 에러를 갖는지 잘 모르겠다! 해결해줘! 흑
      style={
        style
          ? Object.assign(style, locationStyle, directionStyle)
          : Object.assign(locationStyle, directionStyle)
      }
      {...props}>
      {children}
    </D>
  );
};
