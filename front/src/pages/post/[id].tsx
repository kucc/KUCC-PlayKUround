import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { useRouter } from 'next/router';

import { postGetByOneAPI } from 'apis/post';
import Post from 'interfaces/post';

import { postValueContext } from '@contexts/postValue';

const DetailPost = () => {
  const router = useRouter();

  const { id } = router.query;

  const { postValue } = useContext(postValueContext);
  const [postData, setPostData] = useState(postValue);
  async function getData() {
    const data: Post = await postGetByOneAPI(id as string);
    const {
      comments,
      createdAt,
      place: { placeName },
      user: { name: userName, images: userImage },
      likeNum: likesCount,
      images: CarouselList,
      isLiked,
    } = data;
    setPostData({
      comments,
      createdAt,
      placeName,
      userName,
      userImage,
      likesCount,
      CarouselList,
      isLiked,
    });
  }
  console.log(postData);
  useEffect(() => {
    if (!postValue && id) {
      getData();
    }
  }, [postValue, id]);

  console.log(postValue);

  return <div>asasa</div>;
};

export default DetailPost;
