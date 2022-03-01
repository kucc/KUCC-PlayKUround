import { useState } from 'react';

import { InstaCard } from '@components';

import { WritePost } from '@assets';
import { MenuIcon } from '@styles';

import { Navbar } from '../Navbar';

export const InstaCardTable = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onClickMenuIcon = () => {
    return setVisible(!visible);
  };
  const leftItems = [{ icon: <MenuIcon />, onClickLeftItems: onClickMenuIcon }];
  const rightItems = [{ icon: <WritePost />, onClickRightItems: onClickMenuIcon }];
  return <Navbar leftItems={leftItems} rightItems={rightItems} text="실시간 Play's" />;
};
