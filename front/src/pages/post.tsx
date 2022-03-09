import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from 'antd';

import { InstaCard, NavbarWithHamburger } from '@components';

import { getByLatestAPI } from 'apis/post';
import Post from 'interfaces/post';

import { Filter, WritePost } from '@assets';

const PostPage = () => {
  const { data, isLoading, isIdle, isError } = useQuery<Post[]>('post', getByLatestAPI);

  const posts = data as Post[];
  const rightItems = [
    { icon: <WritePost />, onClickRightItems: () => {} },
    { icon: <Filter />, onClickRightItems: () => {} },
  ];

  if (isLoading || isIdle) {
    return <Skeleton active />;
  }

  if (isError) {
    return <span>Error</span>;
  }

  if (posts) {
    return (
      <React.Fragment>
        <NavbarWithHamburger rightItems={rightItems} navbarTitle="실시간 Play's" />
        {posts.map((post: Post) => (
          <InstaCard
            titleText={post.place.placeName}
            placeText={post.place.addressExact}
            description={post.description}
            CarouselList={post.images}
            likesCount={post.likeNum}
          />
        ))}
      </React.Fragment>
    );
  }
};

export default PostPage;
