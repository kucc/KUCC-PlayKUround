import styled from 'styled-components';

import { Bell, Menu, Search, SelectArrow } from '@assets';

export const SidePadding = styled.div`
  padding-left: 4.1%;
  padding-right: 4.1%;
`;

export const SelectArrowIcon = styled(SelectArrow)`
  width: 10px;
  height: 6px;
  path {
    fill: ${({ theme }) => theme.icon.black};
  }
  cursor: pointer;
`;

export const MenuIcon = styled(Menu)`
  width: 20px;
  height: 14px;
  path {
    fill: ${({ theme }) => theme.icon.black};
  }
  cursor: pointer;
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  path {
    fill: ${({ theme }) => theme.icon.black};
  }
  cursor: pointer;
`;

export const BellIcon = styled(Bell)`
  width: 20px;
  height: 22px;
  path {
    fill: ${({ theme }) => theme.icon.black};
  }
  cursor: pointer;
`;

export const HorizontalArrangement = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VerticalArrangement = styled.div`
  display: flex;
  flex-direction: column;
`;
