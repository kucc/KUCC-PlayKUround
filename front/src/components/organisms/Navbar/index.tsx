import React, { useContext } from 'react';

import { Select } from 'antd';

import { Text } from '@components';

import { filterValueContext } from '@contexts/filterValue';
import { SelectArrowIcon } from '@styles';

import {
  StyledNavbarContainer,
  StyledNavbarItems,
  StyledNavbarItemsContainer,
  StyledNavbarSelect,
  StyledNavbarTextContainer,
  WhiteBox,
} from './styled';
import { NavbarProps } from './type';

const { Option } = Select;

export const Navbar: React.FC<NavbarProps> = ({
  leftItems,
  rightItems,
  isMiddleSelect,
  text,
  fontStyle,
}) => {
  const { sendArea } = useContext(filterValueContext);

  const handleChange = (value: any) => {
    sendArea(value);
  };
  return (
    <>
      <WhiteBox />
      <StyledNavbarContainer>
        <StyledNavbarTextContainer>
          {text && (
            <Text
              primary
              body2
              bold
              style={{ position: 'absolute', marginTop: '18px', ...fontStyle }}>
              {text}
            </Text>
          )}
          {isMiddleSelect && (
            <StyledNavbarSelect
              style={{ position: 'absolute', marginTop: '18px', width: 'auto' }}
              defaultValue={{ value: '' }}
              onChange={handleChange}
              bordered={false}
              suffixIcon={<SelectArrowIcon />}>
              <Option style={{ fontSize: 11 }} value=''>
                전체
              </Option>
              <Option style={{ fontSize: 11 }} value='안암'>
                안암 주변
              </Option>
              <Option style={{ fontSize: 11 }} value='혜화'>
                혜화 주변
              </Option>
              <Option style={{ fontSize: 11 }} value='경희대'>
                경희대 주변
              </Option>
              <Option style={{ fontSize: 11 }} value='성신여대'>
                성신여대 주변
              </Option>
            </StyledNavbarSelect>
          )}
        </StyledNavbarTextContainer>
        <StyledNavbarItemsContainer>
          <StyledNavbarItems>
            {leftItems &&
              leftItems.map(({ icon, onClickLeftItems }, key) => (
                <div
                  key={key}
                  onClick={onClickLeftItems}
                  style={{ display: 'flex', alignItems: 'center' }}>
                  {icon}
                </div>
              ))}
          </StyledNavbarItems>
          <StyledNavbarItems>
            {rightItems &&
              rightItems.map(({ icon, onClickRightItems }, key) => (
                <div
                  key={key}
                  onClick={onClickRightItems}
                  style={{ display: 'flex', alignItems: 'center' }}>
                  {icon}
                </div>
              ))}
          </StyledNavbarItems>
        </StyledNavbarItemsContainer>
      </StyledNavbarContainer>
    </>
  );
};
