import React from 'react'
import './Game.css'
import DirectBtn from '../DirectBtn'

function Game() {
  return (
    <>
      <div className="gamePage">
        <h3>Lets play</h3>
      </div>
      <DirectBtn className="btn" name="back to menu" destination="/" />
    </>
  )
}

export default Game
