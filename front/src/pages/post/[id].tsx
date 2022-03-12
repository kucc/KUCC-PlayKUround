import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { Skeleton } from 'antd';
import { useRouter } from 'next/router';

import { PostDetail } from '@templates/PostDetail';

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
      user: { name: userName, images: userImageArray },
      likeNum: likesCount,
      images: CarouselList,
      isLiked,
      userId,
    }: any = data;
    const userImage = userImageArray[0];
    setPostData({
      comments,
      createdAt,
      placeName,
      userName,
      userImage,
      likesCount,
      CarouselList,
      isLiked,
      userId,
      postId: parseInt(id as string),
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
      userName={postData.userName}
      userImage={postData.userImage}
      likesCount={postData.likesCount}
      CarouselList={postData.CarouselList}
      isLiked={postData.isLiked}
      userId={postData.userId}
      postId={postData.postId}></PostDetail>
  );
};

export default DetailPost;
