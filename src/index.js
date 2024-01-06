// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./NavigationBar/NavigationBar";
import ChargeMaster from "./ChargeMaster/App";
import EligibilityTool from "./EligibilityTool/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/chargemaster" element={<ChargeMaster />} />
        <Route path="/eligibilitytool" element={<EligibilityTool />} />
        <Route path="/" element={<EligibilityTool />} /> {/* Default route */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
