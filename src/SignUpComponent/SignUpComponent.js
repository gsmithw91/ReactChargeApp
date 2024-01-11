import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpComponent.css"; // You can create a CSS file for styling

const SignupComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Handle signup logic here, e.g., send a request to the server
    // with the user's information for registration.
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
