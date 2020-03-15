import React, { useState, useEffect } from 'react'
import './GetAnime.css'

const Animes = () => {
  // const [hasError, setErrors] = useState(false);
  const [animes, setAnimes] = useState([])

  const [search, setSearch] = useState('test')

  function searchResults(e) {
    const inputValue = e.target.value
    console.log(inputValue)
    setSearch(inputValue)
  }

  async function getAnimes() {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${search}limit=30`
    )
    data.json().then(data => {
      const myAnimes = data.results.map(result => {
        const myAnime = {}
        myAnime.title = result.title
        myAnime.img = result.image_url
        myAnime.synopsis = result.synopsis
        return myAnime
      })
      setAnimes(myAnimes)
    })
    // .catch(err => setErrors(err));
  }

  useEffect(() => {
    getAnimes()
  }, [])

  return (
    <>
      <div className="container">
        <input
          onChange={e => searchResults(e)}
          type="text"
          className="search"
          placeholder="find anime"
        />
        <button onClick={getAnimes} className="searchBtn" type="Submit">
          Submit
        </button>
      </div>
      <div className="animeList">
        {animes.map(anime => (
          <div key={anime.title}>
            <p key={anime.title}>{anime.title}</p>
            <img alt={anime.title} key={anime.img} src={anime.img}></img>
            <p key={anime.synopsis}>{anime.synopsis}</p>
          </div>
        ))}
      </div>
      {/* <span>Has error: {JSON.stringify(hasE)}</span> */}
    </>
  )
}
export default Animes
