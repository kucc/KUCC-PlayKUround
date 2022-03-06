import styled from 'styled-components';

import { Colors } from '@styles';

export const SwiperContainer = styled.div`
  position: relative;
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: ${Colors.white};
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    border-radius: 5px;
    background: ${Colors.primary};
    border: 1px solid transparent;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    position: absolute;
    top: 15rem;
  }
  img {
    width: 100%;
    height: 270px;
  }
`;
export const DescriptionContainer = styled.div<{ isHidden: boolean }>`
  ${({ isHidden }) => {
    if (isHidden === true) {
      return `
      
  font-size: 12px;
  line-height: 16px;
  margin: 0 auto;
  margin-top: 14px;
  width: 90%;
  height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
    } else {
      return `
  font-size: 12px;
  line-height: 16px;  
  margin: 0 auto;
  margin-top: 14px;
  width: 90%;
  height: auto;`;
    }
  }}
`;
export const MoreDescriptionContainer = styled.div<{ isHidden: boolean }>`
  ${({ isHidden }) => {
    if (isHidden === true) {
      return `
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 0 auto;
      right: 0;
      font-size: 10px;
      color: ${Colors.lightGrey_7};
      cursor: pointer;
      svg{
        margin-left: 5px;
      }
      svg > path {
        fill: ${Colors.lightGrey_7};
      }
  `;
    } else {
      return `display: none`;
    }
  }}
`;
