import React from "react";
import ReactDOM from "react-dom";
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

function AppWithTransition() {
  let location = useLocation();

  return (
    <>
      <NavBar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300} // Duration of the transition
          classNames="fade" // Class name for the transition
        >
          <Routes location={location}>
            <Route path="/chargemaster" element={<ChargeMaster />} />
            <Route path="/eligibilitytool" element={<EligibilityTool />} />
            <Route path="/" element={<EligibilityTool />} />{" "}
            {/* Default route */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppWithTransition />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
