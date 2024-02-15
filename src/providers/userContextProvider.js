import React, { createContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a context provider component
const MyContextProvider = ({ children }) => {
  // State or any data you want to share
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  // Function to update user data
  const updateUserData = (email, password) => {
    setUserData({ email, password });
  };

  return (
    <MyContext.Provider value={{ userData, updateUserData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
