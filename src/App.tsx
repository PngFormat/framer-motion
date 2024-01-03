// Import necessary components and libraries
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/header";
import CircleText from "./components/circleText";
import CardComponent from "./components/card";
import Brands from "./components/brands";
import Board from "./components/board";
import ScrolImageChange from "./components/ScrolImageChange";
import ScrollComponent from "./components/ScrollComponent";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";


function App() {
    return (
        <Router>
            <div className="App" style={{ fontFamily: 'Agency FB'}}>
                <Header />
                <Board></Board>
                <h1>Motion framer test</h1>


                {/*<PublicRoute path="/" restricted={true}>*/}
                {/*    <Home />*/}
                {/*</PublicRoute>*/}

                <PublicRoute path="/login" restricted={false}>
                    <Login />
                </PublicRoute>


                <PrivateRoute path="/dashboard">

                    <CircleText />
                    <CardComponent />
                    <ScrolImageChange />
                    <Brands />
                    <Board></Board>
                    <ScrollComponent />
                </PrivateRoute>
            </div>
        </Router>
    );
}

export default App;
