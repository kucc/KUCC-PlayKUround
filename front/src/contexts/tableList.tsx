import React, { createContext, useState } from 'react';

const MakeTableListContext = createContext({
  tableList: [],
  makeTableList: (places: any) => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MakeTableListProvider = ({ children }: Props): JSX.Element => {
  const [tableList, setTableList] = useState([]);

  const makeTableList = (places: any): void => {
    setTableList(places);
  };

  return (
    <MakeTableListContext.Provider
      value={{
        tableList,
        makeTableList,
      }}>
      {children}
    </MakeTableListContext.Provider>
  );
};

export { MakeTableListContext, MakeTableListProvider };
