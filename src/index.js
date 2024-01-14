// src/index.js
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
import ChargeMaster from "./ChargeMaster/ChargeMaster";
import EligibilityTool from "./EligibilityTool/EligibilityTool";
import SingleChargeSearch from "./SingleChargeSearch/SingleChargeSearch";
import LoginComponent from "./LoginComponents/LoginComponent";
import SignUpComponent from "./SignUpComponent/SignUpComponent";
import LandingPage from "./LandingPage/LandingPage"; // Import your landing page component
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./PrivateRoute/PrivateRoute"; // Import the PrivateRoute component

function AppWithTransition() {
  let location = useLocation();

  return (
    <UserProvider>
      <NavBar />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/chargemaster"
              element={
                <PrivateRoute>
                  <ChargeMaster />
                </PrivateRoute>
              }
            />
            <Route
              path="/eligibilitytool"
              element={
                <PrivateRoute>
                  <EligibilityTool />
                </PrivateRoute>
              }
            />
            <Route
              path="/singlechargesearch"
              element={
                <PrivateRoute>
                  <SingleChargeSearch />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
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
