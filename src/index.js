import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";
import NavBar from "./NavigationBar/NavigationBar";
import ChargeMaster from "./ChargeMaster/App";
import EligibilityTool from "./EligibilityTool/App";
import SingleChargeSearch from "./SingleChargeSearch/App"; // Import the renamed component

function AppWithTransition() {
  let location = useLocation();

  return (
    <>
      <NavBar />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/chargemaster" element={<ChargeMaster />} />
            <Route path="/eligibilitytool" element={<EligibilityTool />} />
            <Route
              path="/singlechargesearch"
              element={<SingleChargeSearch />}
            />{" "}
            <Route path="/" element={<EligibilityTool />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

// React 18 style of rendering with createRoot
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <AppWithTransition />
    </Router>
  </React.StrictMode>
);
