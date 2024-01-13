import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext"; // Import useUser
import "./LoginComponent.css";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser(); // Use the login function from the hook
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    const loginData = { email, password };

    try {
      const loginResponse = await fetch(
        "https://smithtech.io/auth/authenticate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      if (!loginResponse.ok) throw new Error("Login failed");

      const loginResult = await loginResponse.json();
      const userId = loginResult.user_id;

      // Fetch user details
      const userResponse = await fetch(
        `https://smithtech.io/auth/user/${userId}`
      );
      if (!userResponse.ok) throw new Error("Failed to fetch user data");

      const userData = await userResponse.json();

      // Console log the user data for debugging
      console.log("Fetched user data:", userData);

      // Update user context
      login(userData);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    // Optionally, you can add a logout functionality here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginComponent;
