import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import LoggedStat from "./LoggedStat/LoggedStat";

import { useUser } from "../contexts/UserContext"; // Adjust the import path as needed
const NavBar = () => {
  const { user, logout } = useUser(); // Use the user and logout from UserContext

  return (
    <nav>
      <ul>
        <li>
          <Link to="/chargemaster">ChargeMaster</Link>
        </li>
        <li>
          <Link to="/eligibilitytool">EligibilityTool</Link>
        </li>
        <li>
          <Link to="/singlechargesearch">Single Charge Search</Link>
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
        {user ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
        <li>
          <LoggedStat />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
