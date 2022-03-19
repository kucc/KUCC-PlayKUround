import React, { createContext, useState } from 'react';

export const MakeEmailContext = createContext({
  email: '',
  makeEmail: (email: string) => {},
});

export const MakeEmailProvider: React.FC = ({ children }): JSX.Element => {
  const [email, setEmail] = useState<string>('');

  const makeEmail = (email: string): void => {
    setEmail(email);
  };

  return (
    <MakeEmailContext.Provider
      value={{
        email,
        makeEmail,
      }}>
      {children}
    </MakeEmailContext.Provider>
  );
};
