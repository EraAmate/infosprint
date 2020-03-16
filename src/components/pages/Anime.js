import React from 'react'
import './Anime.css'
import Animes from '../GetAnime'
import DirectBtn from '../DirectBtn'

function Anime() {
  return (
    <>
      <div className="animePage">
        <h3>Find your favourite anime</h3>
      </div>
      <Animes />
      <DirectBtn className="btn" name="back to menu" destination="/" />
    </>
  )
}

export default Anime
