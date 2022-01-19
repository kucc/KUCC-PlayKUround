import React from 'react';

import styled from 'styled-components';

import { DivProps } from './type';

// const D = styled.div`
//   &:nth-child(1) {
//     height: 100vh;
//   }
// `;

export const Div = ({
  children,
  style,
  width,
  height,
  // TODO: 이후에 추가하기
  // margin,
  // marginL,
  // marginR,
  // marginT,
  // marginB,
  // marginH,
  // marginV,
  // padding,
  // paddingL,
  // paddingR,
  // paddingT,
  // paddingB,
  ...props
}: DivProps) => {
  const locationStyle = props.center
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    : {};

  // const marginStyle = props.margin ? { margin: margin } ? props.marginT : ;

  return (
    <div
      style={
        style
          ? (Object.assign({ ...style }, locationStyle, directionStyle, {
              width: `${width}px`,
              height: `${height}px`,
            }) as React.CSSProperties)
          : (Object.assign(locationStyle, directionStyle, {
              width: `${width}px`,
              height: `${height}px`,
            }) as React.CSSProperties)
      }
      {...props}>
      {children}
    </div>
  );
};
