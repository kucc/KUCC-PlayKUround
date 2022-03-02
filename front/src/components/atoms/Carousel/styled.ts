import styled from 'styled-components';

import { Colors } from '@styles';

export const SwiperContainer = styled.div`
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
    bottom: 30px;
  }
  img {
    width: 100%;
    height: 270px;
  }
`;
