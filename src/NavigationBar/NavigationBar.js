import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import LoggedStat from "./LoggedStat/LoggedStat";
import { useUser } from "../contexts/UserContext";

const NavBar = () => {
  const { user, logout } = useUser();

  return (
    <nav>
      <div className="logo-container">
        <img src="/STSlogo.jpg" alt="STS Logo" className="navbar-logo" />
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <NavLink
                to="/chargemaster"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ChargeMaster
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/eligibilitytool"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                EligibilityTool
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singlechargesearch"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Single Charge Search
              </NavLink>
            </li>
            <li>
              <a
                href="https://chat.openai.com/g/g-ImFds0gjv-chargemastergpt"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChargeMasterGPT
              </a>
            </li>
            <li>
              <button onClick={logout} className="logout-button">
                Logout
              </button>
            </li>
            <li>
              <LoggedStat />
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
