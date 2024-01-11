import React, { useState } from "react";
import "./LoggedStat.css";

const LoggedStat = () => {
  // Initialize the user's name as an empty string
  const [userName, setUserName] = useState("");

  // Function to update the user's name when logged in
  const handleLogin = (name) => {
    setUserName(name);
  };

  // Function to handle logout (clear the user's name)
  const handleLogout = () => {
    setUserName("");
  };

  return (
    <div className="login-status-container">
      {userName ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <p>Please log in to see your name.</p>
      )}
    </div>
  );
};

export default LoggedStat;
