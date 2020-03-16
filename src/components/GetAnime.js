import React, { useState, useEffect } from 'react'
import './GetAnime.css'
import styled from '@emotion/styled'
import H3 from './H3'

const Input = styled.input`
  text-align: center;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  font-size: 1.5rem;
  font: 18px Phosphate;
  color: #d97919;
`
const SearchButton = styled.button`
  border-radius: 5px;
  border: 2px solid #1a1918;
  margin-left: 10px;
  font-size: 1rem;
  font: 18px Phosphate;
  width: 100px;
  font-size: 1.5rem;
  color: #d97918;
  background-color: #1a1918;
`
const AnimeListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
  text-align: center;
  background-color: #323030;
  border-radius: 10px;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`
const AnimeName = styled(H3)`
  background-color: #d97919;
`
const Img = styled.img`
  height: 450px;
`

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: white;
`

const Animes = () => {
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
  }

  useEffect(() => {
    getAnimes()
  })

  return (
    <>
      <Container>
        <Input
          onChange={e => searchResults(e)}
          type="text"
          className="search"
          placeholder="find anime"
        />
        <SearchButton onClick={getAnimes} type="Submit">
          Submit
        </SearchButton>
      </Container>
      <AnimeListContainer>
        {animes.map(anime => (
          <div key={anime.title}>
            <AnimeName key={anime.title}>{anime.title}</AnimeName>
            <Img alt={anime.title} key={anime.img} src={anime.img}></Img>
            <Paragraph key={anime.synopsis}>{anime.synopsis}</Paragraph>
          </div>
        ))}
      </AnimeListContainer>
    </>
  )
}
export default Animes
