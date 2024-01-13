import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpComponent.css"; // Make sure the path to your CSS file is correct

const SignupComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For success or error message
  const [isError, setIsError] = useState(false); // To differentiate between success and error

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      company: companyName,
      user_type_id: 1,
      password: password,
    };

    try {
      const response = await fetch("https://smithtech.io/auth/register", {
        // Update the URL to match your endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("User registered successfully");
        setIsError(false);
        // Optionally, clear the form or redirect the user
      } else {
        setMessage(result.message || "Registration failed");
        setIsError(true);
      }
    } catch (error) {
      setMessage("Registration failed: " + error.message);
      setIsError(true);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {message && (
        <div className={isError ? "error-message" : "success-message"}>
          {message}
        </div>
      )}
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter your First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="form-group">
          <label>Company/Organization Name:</label>
          <input
            type="text"
            placeholder="Enter your Company/Organization Name"
            value={companyName}
            onChange={handleCompanyNameChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupComponent;
