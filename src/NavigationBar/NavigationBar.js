import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import LoggedStat from "./LoggedStat/LoggedStat";

const NavBar = () => {
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
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <LoggedStat /> {/* Include the LoginStatus component */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
