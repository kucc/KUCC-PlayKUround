import React, { createContext, useState } from 'react';

const filterValueContext = createContext({
  categoryList: [],
  sendCategory: (category: any) => {},
  area: '',
  sendArea: (area: any) => {},
});

const filterValueProvider: React.FC = ({ children }): JSX.Element => {
  const [categoryList, setCategoryList] = useState([]);
  const [area, setArea] = useState('');

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

export { filterValueContext, filterValueProvider };
