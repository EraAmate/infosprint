import React from 'react';
import './Anime.css';
import Animes from '../GetAnime';
import DirectBtn from '../DirectBtn';

function Header() {
  return (
    <>
      <div className="animePage">
        <h3>Find your favourite anime</h3>
        <input type="text" className="search" placeholder="Naruto?" />
      </div>
      <div className="animeList">
        <Animes />
      </div>
      <DirectBtn className="btn" name="back to menu" destination="/" />
    </>
  );
}

export default Header;

/// FILTER, SEARCH, API
