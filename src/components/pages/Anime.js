import React from 'react';
import './Anime.css';

function Header() {
  return (
    <>
      <div className="animePage">
        <h3>Find your favourite anime</h3>
        <input type="text" className="search" placeholder="Naruto?" />
      </div>
    </>
  );
}

export default Header;

// function App() {
//  const [searchItem, setSearchItem] = React.useState("");
//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
