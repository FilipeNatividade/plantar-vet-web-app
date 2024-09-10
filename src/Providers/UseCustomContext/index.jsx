import React, { createContext, useContext, useState } from 'react';

const UseCustomContext = createContext();

export const CustomState = ({ children }) => {
  const [codeTrue, setCodeTrue] = useState(false);

  return (
    <UseCustomContext.Provider
      value={{
        codeTrue,
        setCodeTrue,
      }}
    >
      {children}
    </UseCustomContext.Provider>
  );
};

export const useCustomState = () => useContext(UseCustomContext);
