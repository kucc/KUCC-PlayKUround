import React from 'react';

export type HomeProps = {
  leftItems?: Array<{
    icon: JSX.Element;
    onClickLeftItems: () => void;
  }>;
  rightItems?: Array<{
    icon: JSX.Element;
    onClickRightItems: () => void;
  }>;
  NavBarTitle: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};
