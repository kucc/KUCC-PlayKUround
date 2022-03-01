import React from 'react';

import { Navbar } from '@components';

import { Back } from '@assets';

import { BackIconWithNavbarProps } from './type';

export const BackIconWithNavbar = ({ text, onClickBackIcon }: BackIconWithNavbarProps) => {
  const leftItems = [{ icon: <Back />, onClickLeftItems: onClickBackIcon }];

  return <Navbar text={text} leftItems={leftItems} />;
};
