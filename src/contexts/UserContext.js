import React, { createContext, useState, useContext } from "react";

// Create the context object with a default value
const UserContext = createContext(null);

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Provider component that wraps your app and makes the user object available to any child component that calls the useUser() hook.
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update the user object with user data upon login
  const login = (userInfo) => {
    setUser(userInfo);
  };

  // Function to clear the user object upon logout
  const logout = () => {
    setUser(null);
  };

  // The value that will be given to the context
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
