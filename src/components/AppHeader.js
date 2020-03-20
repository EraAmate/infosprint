import React from 'react'

import styled from '@emotion/styled'
import Logo from './Logo'

const Header = styled.header`
  margin: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: ${props => props.theme.colors.headerLine};
`
const Title = styled.h1`
  font: 31px Phosphate;
  font-size: 2.1rem;
`

function AppHeader() {
  return (
    <Header>
      <Logo />
      <Title>Info Ninja</Title>
    </Header>
  )
}

export default AppHeader
