import React from 'react';

import { Text } from '@components/atoms';

import {
  StyledNavbarContainer,
  StyledNavbarItems,
  StyledNavbarItemsContainer,
  StyledNavbarTextContainer,
} from './styled';

interface NavbarProps {
  leftItems?: JSX.Element[];
  rightItems?: JSX.Element[];
  text?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ leftItems, rightItems, text }) => {
  return (
    <StyledNavbarContainer>
      {text && (
        <StyledNavbarTextContainer>
          <Text style={{ position: 'absolute', marginTop: '22px' }}>{text}</Text>
        </StyledNavbarTextContainer>
      )}
      <StyledNavbarItemsContainer>
        <StyledNavbarItems>
          {leftItems && leftItems.map((item, key) => <div key={key}>{item}</div>)}
        </StyledNavbarItems>
        <StyledNavbarItems>
          {rightItems && rightItems.map((item, key) => <div key={key}>{item}</div>)}
        </StyledNavbarItems>
      </StyledNavbarItemsContainer>
    </StyledNavbarContainer>
  );
};
