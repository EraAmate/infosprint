import React from 'react';
import './Anime.css';
import Animes from './GetAnime';

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
    </>
  );
}

export default Header;

/// FILTER, SEARCH, API
