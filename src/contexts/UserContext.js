// UserContext.js
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const login = (userInfo) => {
    setUser(userInfo);
  };

  const logout = () => {
    setUser(null);
    navigate("/"); // Redirect to the landing page
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
