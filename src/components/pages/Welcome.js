import React from 'react';
import './Welcome.css';
import DirectBtn from '../DirectBtn';
// import NinjaProgram from '../assets/NinjaProgram.jpg';

// import { Link } from 'react-router-dom';

function Welcome(props) {
  return (
    <>
      <h3>
        follow the coolest topics all around Japan and anime with info ninja
      </h3>
      <div className="welcPage">
        <DirectBtn className="welcBtn" name="anime list" destination="/anime" />
        <DirectBtn
          className="welcBtn"
          name="questions"
          destination="/question"
        />
        <DirectBtn className="welcBtn" name="network" destination="/network" />
        <DirectBtn className="welcBtn" name="game" destination="/game" />
      </div>
      {/* <img className="logo" src={"NinjaProgram"} alt="Ninja surfs" /> */}
    </>
  );
}
export default Welcome;
