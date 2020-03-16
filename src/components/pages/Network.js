import React from 'react'
import DirectionButton from '../DirectionButton'
import H3 from '../H3'

import styled from '@emotion/styled'

const NetworkPageContaienr = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

function Network() {
  return (
    <>
      <NetworkPageContaienr>
        <H3>let's chat</H3>
      </NetworkPageContaienr>
      <DirectionButton name="back to menu" destination="/" />
    </>
  )
}

export default Network
