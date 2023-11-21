import React, { createContext, useState } from 'react';

export const DataContext = createContext({user:null});
const initialUser = null;

export const DataProvider = ({ children }) => {
  const [user, setData] = useState(initialUser);

  const setUser = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};
