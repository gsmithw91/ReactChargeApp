import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

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
          <Link to="/singlechargesearch">Single Charge Search</Link>{" "}
          {/* New Link */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
