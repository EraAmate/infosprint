import React from 'react'
import './Network.css'
import DirectBtn from '../DirectBtn'

function Network() {
  return (
    <>
      <div className="networkPage">
        <h3>let's chat</h3>
      </div>
      <DirectBtn className="btn" name="back to menu" destination="/" />
    </>
  )
}

export default Network
