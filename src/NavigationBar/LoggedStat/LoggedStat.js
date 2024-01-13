// LoggedStat.js
import React from "react";
import { useUser } from "../../contexts/UserContext"; // Verify the correct path
import "./LoggedStat.css";

const LoggedStat = () => {
  const { user } = useUser();

  // Debugging: Log the user object
  console.log("User object from context:", user);

  return (
    <div className="login-status-container">
      {user ? (
        <p>Welcome, {user.FirstName}!</p> // Use 'FirstName' as per your data structure
      ) : (
        <p>Please log in to see your name.</p>
      )}
    </div>
  );
};

export default LoggedStat;
