import React from 'react'
import AppHeader from './components/AppHeader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './components/pages/Welcome'
import Anime from './components/pages/Anime'
import Question from './components/pages/Question'
import Network from './components/pages/Network'
import Game from './components/pages/Game'
import styled from '@emotion/styled'

const Main = styled.main`
  display: flex-box;
  padding: 30px;
`

function App() {
  return (
    <>
      <Router>
        <AppHeader />

        <Main>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/anime">
              <Anime />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route exact path="/network">
              <Network />
            </Route>
            <Route exact path="/game">
              <Game />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  )
}

export default App
