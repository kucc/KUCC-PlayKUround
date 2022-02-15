import React from 'react';

import { Text } from '@components';

import {
  StyledNavbarContainer,
  StyledNavbarItems,
  StyledNavbarItemsContainer,
  StyledNavbarTextContainer,
  WhiteBox,
} from './styled';
import { NavbarProps } from './type';

export const Navbar: React.FC<NavbarProps> = ({ leftItems, rightItems, text, fontStyle }) => {
  return (
    <>
      <WhiteBox />
      <StyledNavbarContainer>
        {text && (
          <StyledNavbarTextContainer>
            <Text
              primary
              body2
              bold
              style={{ position: 'absolute', marginTop: '18px', ...fontStyle }}>
              {text}
            </Text>
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
    </>
  );
};
