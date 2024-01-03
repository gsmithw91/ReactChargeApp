// App.js
import React from "react";
import CarrierTextSearch from "./components/CarrierTextSearch/CarrierTextSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Eligibility Tool</header>
      <main>
        <CarrierTextSearch />
      </main>
    </div>
  );
}

export default App;
