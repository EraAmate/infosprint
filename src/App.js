import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/pages/Welcome';
import Anime from './components/pages/Anime';
import Question from './components/pages/Question';
import Network from './components/pages/Network';
import Game from './components/pages/Game';

function App() {
  return (
    <>
      <Router>
        <Header />

        <main className="main">
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
        </main>
      </Router>
    </>
  );
}

export default App;
