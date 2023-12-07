import React from 'react';

import './App.css';
import Header from "./components/header";
import CircleText from "./components/circleText";
import CardComponent from "./components/card";

function App() {
  return (
    <div className="App">
      <Header/>
        <h1>Motion framer test</h1>
    <CircleText/>
        <CardComponent/>
    </div>
  );
}

export default App;
