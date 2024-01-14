import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"; // Ensure this import path is correct
import LoggedStat from "./LoggedStat/LoggedStat"; // Adjust the path as needed
import { useUser } from "../contexts/UserContext";
const NavBar = () => {
  const { user, logout } = useUser(); // Use the user and logout from UserContext

  return (
    <nav>
      <ul>
        {user && (
          <>
            <li>
              <NavLink to="/chargemaster" activeClassName="active">
                ChargeMaster
              </NavLink>
            </li>
            <li>
              <NavLink to="/eligibilitytool" activeClassName="active">
                EligibilityTool
              </NavLink>
            </li>
            <li>
              <NavLink to="/singlechargesearch" activeClassName="active">
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
        )}
        {!user && (
          <>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active">
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
