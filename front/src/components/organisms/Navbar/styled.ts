import styled from 'styled-components';

export const WhiteBox = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const StyledNavbarContainer = styled.div`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  background-color: ${({ theme }) => theme.bg.primary};
`;

export const StyledNavbarTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledNavbarItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 16px;
`;

export const StyledNavbarItems = styled.div`
  display: flex;
  gap: 20px;
`;
