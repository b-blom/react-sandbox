import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Game from './game/Game';
import Home from './pages/Home';
import CreateCard from './pages/CreateCard';

export default function GameRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/createcard'>Create card</Link>
        </li>
        <li>
          <Link to='/game'>Play field</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/createcard'>
            <CreateCard />
          </Route>
          <Route path='/game'>
            <Game />
          </Route>
        </Switch>
        <Game />
      </div>
    </Router>
  );
}
