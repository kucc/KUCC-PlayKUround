import React, { useContext, useEffect, useState } from 'react';

import { Skeleton } from 'antd';
import { useRouter } from 'next/router';

import { PostDetail } from '@templates';

import { postGetByOneAPI } from 'apis';
import { PostDetailType, PostType } from 'interfaces';

import { postValueContext } from '@contexts';

const DetailPost = () => {
  const router = useRouter();

  const { id: postId } = router.query;

  const { postValue }: { postValue: PostDetailType } = useContext(postValueContext);
  const [postData, setPostData] = useState<PostDetailType>(postValue);
  async function getData() {
    const data: PostType & { userId: number } = await postGetByOneAPI(postId as string);
    const {
      comments,
      place: { placeName },
      user: { name: writerName, image: writerImage },
      likeNum: likesCount,
      images: CarouselList,
      isLiked,
      userId,
      id,
      description,
      createdAt,
      updatedAt,
    } = data;

    setPostData({
      comments,
      placeName,
      writerName,
      writerImage,
      likesCount,
      CarouselList,
      isLiked,
      userId,
      id,
      description,
      createdAt,
      updatedAt,
    });
  }
  useEffect(() => {
    if (!postValue && postId) {
      getData();
    }
  }, [postValue, postId]);

  if (!postData) return <Skeleton active />;
  return (
    <PostDetail
      id={postData.id}
      comments={postData.comments}
      updatedAt={postData.updatedAt}
      createdAt={postData.createdAt}
      placeName={postData.placeName}
      writerName={postData.writerName}
      writerImage={postData.writerImage}
      likesCount={postData.likesCount}
      CarouselList={postData.CarouselList}
      isLiked={postData.isLiked}
      userId={postData.userId}
      description={postData.description}
    />
  );
};

export default DetailPost;
