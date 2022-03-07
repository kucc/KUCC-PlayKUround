import React, { createContext, useState } from 'react';

const SendCategoryContext = createContext({
  categoryList: [],
  sendCategory: (places: any) => {},
});



const SendCategoryProvider : React.FC = ({ children }): JSX.Element => {
  const [categoryList, setCategoryList] = useState([]);

  const sendCategory = (places: any): void => {
    setCategoryList(places);
  };

  return (
    <SendCategoryContext.Provider
      value={{
        categoryList,
        sendCategory,
      }}>
      {children}
    </SendCategoryContext.Provider>
  );
};

export { SendCategoryContext, SendCategoryProvider };
