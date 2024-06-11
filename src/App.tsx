import React from 'react';

import './App.css';
import Header from "./components/header";
import CircleText from "./components/circleText";
import CardComponent from "./components/card";
import Brands from "./components/brands";
import Board from "./components/board";
import ScrolImageChange from "./components/ScrolImageChange";
import TablePhoto from "./components/tablePhoto";
import BigHeader from "./components/Title";
import RunAwayPhoto from "./components/RunAwayPhoto";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Agency FB'}}>
      <Header/>
        <Board imageSrc='https://i.ytimg.com/vi/uTsyptcYjt0/maxresdefault.jpg' children={undefined}></Board>
        <h1>Motion framer test</h1>
    <CircleText/>
        <CardComponent/>
        <ScrolImageChange/>
        <Brands/>
        <BigHeader title={'Our photos'} subtitle={'photo'}/>
        <TablePhoto/>
        <RunAwayPhoto src={'https://i.pinimg.com/originals/c5/33/d9/c533d981ea595b230c068f2e22efd50c.png'} alt={'photo'}/>
    </div>
  );
}

export default App;
