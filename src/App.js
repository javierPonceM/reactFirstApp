import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CustomHeader from './app-components/header/header';
import LeftSide from './app-components/left-side/leftSide';
import CenterSide from './app-components/center-side/centerSide';
import RigthSide from './app-components/rigth-side/rigthSide';
import Loader from './app-components/loader/loader';

function App() {
  return (
    <div className="App">
      <CustomHeader></CustomHeader>
      <div className="row">
        <LeftSide></LeftSide>
        <CenterSide></CenterSide>
        <RigthSide></RigthSide>
        <Loader></Loader>
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
