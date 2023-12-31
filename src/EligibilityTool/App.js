// App.js
import React from "react";
import CarrierList from "./components/CarrierList/CarrierList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Eligibility Tool</header>
      <main>
        <CarrierList />
      </main>
    </div>
  );
}

export default App;
