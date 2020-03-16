import React from 'react'
import Animes from '../GetAnime'

import styled from '@emotion/styled'
import H3 from '../H3'
import DirectionButton from '../DirectionButton'

const AnimePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

function Anime() {
  return (
    <>
      <AnimePageContainer>
        <H3>Find your favourite anime</H3>
      </AnimePageContainer>

      <Animes />
      <DirectionButton name="back to menu" destination="/" />
    </>
  )
}

export default Anime
