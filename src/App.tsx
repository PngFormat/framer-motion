import React from 'react';

import './App.css';
import Header from "./components/header";
import CircleText from "./components/circleText";
import CardComponent from "./components/card";
import Brands from "./components/brands";
import Board from "./components/board";
import ScrolImageChange from "./components/ScrolImageChange";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Agency FB'}}>
      <Header/>
        <Board imageSrc='https://i.ytimg.com/vi/uTsyptcYjt0/maxresdefault.jpg' children={undefined}></Board>
        <h1>Motion framer test</h1>
    <CircleText/>
        <CardComponent/>
        <ScrolImageChange/>
        {/*<Brands/>*/}
        <Board imageSrc='https://i.ytimg.com/vi/uTsyptcYjt0/maxresdefault.jpg' children={undefined}></Board>

    </div>
  );
}

export default App;
