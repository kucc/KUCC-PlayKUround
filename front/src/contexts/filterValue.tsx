import React, { createContext, useState } from 'react';

export const filterValueContext = createContext({
  categoryList: [],
  sendCategory: (category: any) => {},
  area: '',
  sendArea: (area: any) => {},
});

export const filterValueProvider: React.FC = ({ children }): JSX.Element => {
  const [categoryList, setCategoryList] = useState([]);
  const [area, setArea] = useState<string>('');

  const sendCategory = (category: any): void => {
    setCategoryList(category);
  };

  const sendArea = (area: any): void => {
    setArea(area);
  };

  return (
    <filterValueContext.Provider
      value={{
        categoryList,
        sendCategory,
        area,
        sendArea,
      }}>
      {children}
    </filterValueContext.Provider>
  );
};
