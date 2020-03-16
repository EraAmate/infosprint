import React from 'react'
import './Welcome.css'
import DirectBtn from '../DirectBtn'
// import NinjaProgram from '../assets/NinjaProgram.jpg';

function Welcome(props) {
  return (
    <>
      <h3>choose your topic</h3>
      <div className="welcPage">
        <DirectBtn className="welcBtn" name="anime list" destination="/anime" />
        <DirectBtn
          className="welcBtn"
          name="add anime"
          destination="/question"
        />
        <DirectBtn className="welcBtn" name="network" destination="/network" />
        <DirectBtn className="welcBtn" name="game" destination="/game" />
      </div>
      {/* <img className="logo" src={"NinjaProgram"} alt="Ninja surfs" /> */}
    </>
  )
}
export default Welcome
