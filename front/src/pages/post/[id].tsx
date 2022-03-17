import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { Skeleton } from 'antd';
import { useRouter } from 'next/router';

import { PostDetail } from '@templates';

import { postGetByOneAPI } from 'apis/post';
import Post from 'interfaces/post';
import postDetail from 'interfaces/postDetail';

import { postValueContext } from '@contexts/postValue';

const DetailPost = () => {
  const router = useRouter();

  const { id } = router.query;

  const { postValue }: { postValue: postDetail } = useContext(postValueContext);
  const [postData, setPostData] = useState<postDetail>(postValue);
  async function getData() {
    const data: Post = await postGetByOneAPI(id as string);
    const {
      comments,
      createdAt,
      place: { placeName },
      user: { name: writerName, images: writerImage },
      likeNum: likesCount,
      images: CarouselList,
      isLiked,
      userId,
      description,
    }: any = data;
    setPostData({
      comments,
      createdAt,
      placeName,
      writerName,
      writerImage,
      likesCount,
      CarouselList,
      isLiked,
      userId,
      postId: parseInt(id as string),
      description,
    });
  }
  useEffect(() => {
    if (!postValue && id) {
      getData();
    }
  }, [postValue, id]);

  if (!postData) return <Skeleton active />;
  return (
    <PostDetail
      comments={postData.comments}
      createdAt={postData.createdAt}
      placeName={postData.placeName}
      writerName={postData.writerName}
      writerImage={postData.writerImage}
      likesCount={postData.likesCount}
      CarouselList={postData.CarouselList}
      isLiked={postData.isLiked}
      userId={postData.userId}
      postId={postData.postId}
      description={postData.description}
    />
  );
};

export default DetailPost;
