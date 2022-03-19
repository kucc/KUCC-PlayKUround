import React, { createContext, useState } from 'react';

export const DistanceValueContext = createContext({
  distance: '',
  sendDistance: (value: string) => {},
});

export const DistanceValueProvider: React.FC = ({ children }): JSX.Element => {
  const [distance, setDistance] = useState<string>('');

  const sendDistance = (value: string): void => {
    setDistance(value);
  };

  return (
    <DistanceValueContext.Provider
      value={{
        distance,
        sendDistance,
      }}>
      {children}
    </DistanceValueContext.Provider>
  );
};
