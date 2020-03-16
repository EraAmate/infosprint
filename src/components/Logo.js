import React from 'react'
import styled from '@emotion/styled'
import Ninja from './assets/Ninja.png'

const Img = styled.img`
  height: 3.1rem;
`

function Logo(props) {
  return <Img src={Ninja} alt="Ninja Logo" {...props} />
}

export default Logo
