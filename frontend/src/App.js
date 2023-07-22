import React from 'react'
import Sidepanel from './components/sidepanel/Sidepanel'
import Productiondata from './components/prod/ProductionData';
import './App.css';

function App() {
  return (
    <div className="App">
      <div
        id="sidebar"
        style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
      >
        <Sidepanel />
        <Productiondata />
      </div>
    </div >
  );
}

export default App;
