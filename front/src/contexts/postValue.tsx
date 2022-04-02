import React, { createContext, useState } from 'react';

import { PostDetailType } from 'interfaces';

interface postValueProps {
  postValue: PostDetailType;
  sendPostValue: any;
}

export const postValueContext = createContext<postValueProps>({
  postValue: {
    id: -1,
    comments: [],
    placeName: '',
    writerName: '',
    description: '',
    writerImage: null,
    likesCount: 0,
    CarouselList: null,
    isLiked: false,
    userId: -1,
    createdAt: '',
    updatedAt: '',
  },
  sendPostValue: (category: any) => {},
});

export const postValueProvider = ({ children }: any) => {
  const [postValue, setPostValue] = useState<PostDetailType>();

  const sendPostValue = (post: any): void => {
    setPostValue(post);
  };

  return (
    <postValueContext.Provider
      value={{
        postValue: postValue as PostDetailType,
        sendPostValue,
      }}>
      {children}
    </postValueContext.Provider>
  );
};
