import React from 'react';
import { useState } from 'react';

import { InstaCard } from '@components';
import { Navbar } from '@components';

import { Filter } from '@assets';
import { WritePost } from '@assets';
import { MenuIcon } from '@styles';

const TestPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onClickMenuIcon = () => {
    return setVisible(!visible);
  };
  const leftItems = [{ icon: <MenuIcon />, onClickLeftItems: onClickMenuIcon }];
  const rightItems = [
    { icon: <WritePost />, onClickRightItems: onClickMenuIcon },
    { icon: <Filter />, onClickRightItems: onClickMenuIcon },
  ];
  return (
    <>
      <Navbar leftItems={leftItems} rightItems={rightItems} text="실시간 Play's" />
      <InstaCard
        titleText='인아최고 만화카페'
        placeText='서울특별시 동대문구 약령시로 9길 9 '
        CarouselList={[
          {
            imageSource: '/pictures/insta-card.png',
            description:
              '오늘은 인아최고 만화카페에 가서 만화책을 읽었다. 만화책은 정말 재밌다. 오랜만에 친구들이랑 같이 만화책을 읽으러 가서 너무 재밌었다. 내가 그 중 가장 인상깊게 읽었던 책은 000이다. 그 책은 그림체가 너무 예쁘고 줄거리도 탄탄해서 읽으면 책에 대한 몰입감이 대단하다. 다음에 친구들이랑 또 와서 다른 만화책도 같이 한번 읽어보고 싶다. 적극적으로 추천함',
          },
          {
            imageSource: '/pictures/insta-card.png',
            description:
              '오늘은 인아최고 만화카페에 가서 만화책을 읽었다. 만화책은 정말 재밌다. 오랜만에 친구들이랑 같이 만화책을 읽으러 가서 너무 재밌었다. 내가 그 중 가장 인상깊게 읽었던 책은 000이다. 그 책은 그림체가 너무 예쁘고 줄거리도 탄탄해서 읽으면 책에 대한 몰입감이 대단하다. ',
          },
          {
            imageSource: '/pictures/profile.png',
            description:
              '오늘은 인아최고 만화카페에 가서 만화책을 읽었다. 만화책은 정말 재밌다. 오랜만에 친구들이랑 같이 만화책을 읽으러 가서 너무 재밌었다. ',
          },
        ]}
        likesCount={123}
      />
      <InstaCard
        titleText='인아최고 만화카페'
        placeText='서울특별시 동대문구 약령시로 9길 9 '
        CarouselList={[
          {
            imageSource: '/pictures/insta-card.png',
            description:
              '오늘은 인아최고 만화카페에 가서 만화책을 읽었다. 만화책은 정말 재밌다. 오랜만에 친구들이랑 같이 만화책을 읽으러 가서 너무 재밌었다. 내가 그 중 가장 인상깊게 읽었던 책은 000이다. ',
          },
          {
            imageSource: '/pictures/insta-card.png',
            description:
              '늘은 인아최고 만화카페에 가서 만화책을 읽었다. 만화책은 정말 재밌다. 오랜만에 친구들이랑 같이 만화책을 읽으러 가서 너무 재밌었다. 내가 그 중 가장 인상깊게 읽었던 책은 000이다. 그 책은 그림체가 너무 예쁘고 줄거리도 탄탄해서 읽으면 책에 대한 몰입감이 대단하다. 다음에 친구들이랑 또 와서 다른 만화책도 같이 한번 읽어보고 싶다. 적극적으로 추천함',
          },
          { imageSource: '/pictures/profile.png', description: '테스트용 3번' },
        ]}
        likesCount={125}
      />
      <InstaCard
        titleText='인아최고 만화카페'
        placeText='서울특별시 동대문구 약령시로 9길 9 '
        CarouselList={[
          {
            imageSource: '/pictures/insta-card.png',
            description:
              '오늘은 인아최고 만화카페에 가서 만화책을 읽었다. 만화책은 정말 재밌다. 오랜만에 친구들이랑 같이 만화책을 읽으러 가서 너무 재밌었다. 내가 그 중 가장 인상깊게 읽었던 책은 000이다. 그 책은 그림체가 너무 예쁘고 줄거리도 탄탄해서 읽으면 책에 대한 몰입감이 대단하다.  ',
          },
          { imageSource: '/pictures/insta-card.png', description: '테스트용 2번' },
          { imageSource: '/pictures/profile.png', description: '테스트용 3번' },
        ]}
        likesCount={200}
      />
    </>
  );
};

export default TestPage;
