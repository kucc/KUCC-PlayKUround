import React, { createContext, useState } from 'react';

const postValueContext = createContext({
  postValue: {},
  sendPostValue: (category: any) => {},
});

const postValueProvider: React.FC = ({ children }): JSX.Element => {
  const [postValue, setPostValue] = useState('');

  const sendPostValue = (post: any): void => {
    setPostValue(post);
  };

  return (
    <postValueContext.Provider
      value={{
        postValue,
        sendPostValue,
      }}>
      {children}
    </postValueContext.Provider>
  );
};

export { postValueContext, postValueProvider };
