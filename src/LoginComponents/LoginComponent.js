import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginComponent.css"; // You can create a CSS file for styling

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Simulate a login by checking credentials (replace this with your actual login logic)
    if (email === "user@example.com" && password === "password") {
      setIsLoggedIn(true);
      navigate("/dashboard"); // Redirect to the dashboard or desired page after login
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally, you can add a logout functionality here
  };

  return (
    <div className="login-container">
      <h2>{isLoggedIn ? "Welcome, User!" : "Login"}</h2>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
      <p>
        {!isLoggedIn ? (
          <>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </>
        ) : null}
      </p>
    </div>
  );
};

export default LoginComponent;
