import React from 'react';
import './Header.css';
import Ninja from './assets/Ninja.png';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Ninja} alt="Ninja logo" />
      <h1 className="title">Info Ninja</h1>
    </header>
  );
}

export default Header;
