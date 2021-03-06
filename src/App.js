import React from 'react'
import AppHeader from '../src/components/AppHeader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Anime from './pages/Anime'
import Question from './pages/Question'
import Network from './pages/Network'
import Game from './pages/Game'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import sakura from './themes/sakura'
import ninja from './themes/ninja'

const Main = styled.main`
  display: flex-box;
  justify-content: center;
  text-align: center;
  padding: 30px;
`

function App() {
  const [theme, setTheme] = React.useState(ninja)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppHeader />
        <Main>
          <Switch>
            <Route exact path="/">
              <Welcome
                onSwitchButtonClick={() => {
                  setTheme(theme === ninja ? sakura : ninja)
                }}
              />
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
    </ThemeProvider>
  )
}

export default App
