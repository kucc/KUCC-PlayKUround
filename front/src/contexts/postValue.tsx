import React, { createContext, useState } from 'react';

import postDetail from 'interfaces/postDetail';

interface postValueProps {
  postValue: postDetail;
  sendPostValue: any;
}

const postValueContext = createContext<postValueProps>({
  postValue: {
    comments: [],
    createdAt: '',
    placeName: '',
    userName: '',
    userImage: null,
    likesCount: 0,
    CarouselList: null,
    isLiked: false,
    userId: -1,
    postId: -1,
  },
  sendPostValue: (category: any) => {},
});

const postValueProvider: React.FC = ({ children }): JSX.Element => {
  const [postValue, setPostValue] = useState<postDetail>();

  const sendPostValue = (post: any): void => {
    setPostValue(post);
  };

  return (
    <postValueContext.Provider
      value={{
        postValue: postValue as postDetail,
        sendPostValue,
      }}>
      {children}
    </postValueContext.Provider>
  );
};

export { postValueContext, postValueProvider };
