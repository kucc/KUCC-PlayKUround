import styled from 'styled-components';

import { Colors } from '@styles';

// export const StyledProfileImg = styled.img`
//   border-radius: 50%;
//   width: 37px;
//   height: 37px;
//   margin-top: -10px;
//   margin-left: -5px;
//   object-fit: cover;
// `;

export const FirstPageLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 476px;
`;

export const StyledLogo = styled.img`
  width: 72px;
  height: 42px;
  margin-top: 26px;
`;

export const Title = styled.div`
  font-family: Gmarket Sans;
  font-weight: 800;
  font-size: 30px;
  line-height: 34px;
`;

export const Description = styled.div`
  width: 226px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
  color: ${Colors.grey_8};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 62px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 54px;
  margin-top: 24px;
  box-shadow: 0px 0px 4px ${Colors.primary};
  border: none;
  border-radius: 27px;
  background-color: ${Colors.primary};
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: ${Colors.white};
  &:hover {
    background-color: ${Colors.primary_4};
  }
  &:active {
    background-color: ${Colors.primary_6};
  }
  cursor: pointer;
  transition: 0.5s;
`;
