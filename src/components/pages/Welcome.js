import React from 'react'
import styled from '@emotion/styled'
import H3 from '../H3'
import DirectionButton from '../DirectionButton'

const WeclomePageContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Welcome(props) {
  return (
    <>
      <H3>choose your topic</H3>
      <WeclomePageContainer>
        <DirectionButton
          className="welcBtn"
          name="anime list"
          destination="/anime"
        />
        <DirectionButton
          className="welcBtn"
          name="add anime"
          destination="/question"
        />
        <DirectionButton
          className="welcBtn"
          name="network"
          destination="/network"
        />
        <DirectionButton name="game" destination="/game" />
      </WeclomePageContainer>
    </>
  )
}
export default Welcome
