import React, { createContext, useState } from 'react';

const MakeEmailContext = createContext({
  email: '',
  makeEmail: (email: string) => {},
});

const MakeEmailProvider : React.FC = ({ children }): JSX.Element => {
  const [email, setEmail] = useState('');

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

export { MakeEmailContext, MakeEmailProvider };
