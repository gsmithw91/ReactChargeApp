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
import SingleChargeSearch from "./SingleChargeSearch/App";
import LoginComponent from "./LoginComponents/LoginComponent";
import SignUpComponent from "./SignUpComponent/SignUpComponent";
import { UserProvider } from "./contexts/UserContext";

function AppWithTransition() {
  let location = useLocation();

  return (
    <UserProvider>
      <NavBar />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/chargemaster" element={<ChargeMaster />} />
            <Route path="/eligibilitytool" element={<EligibilityTool />} />
            <Route
              path="/singlechargesearch"
              element={<SingleChargeSearch />}
            />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/" element={<EligibilityTool />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </UserProvider>
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
