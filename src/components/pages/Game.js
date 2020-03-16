import React from 'react'

import DirectionButton from '../DirectionButton'
import H3 from '../H3'

import styled from '@emotion/styled'

const NetworkPageContaienr = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

function Game() {
  return (
    <>
      <NetworkPageContaienr>
        <H3>Lets play</H3>
      </NetworkPageContaienr>
      <DirectionButton name="back to menu" destination="/" />
    </>
  )
}

export default Game
