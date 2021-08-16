import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Game from './game/Game';
import Home from './pages/Home';
import AddCat from './pages/AddCat';
import ContentCreator from './pages/ContentCreator';
import CardDeck from './game/cards/CardDeck';

export default function GameRouter() {
  return (
    <Router>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: '15px',
          borderBottom: '3px solid black',
        }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/AddCat'>Create card</Link>
        </li>
        <li>
          <Link to='/game'>Play field</Link>
        </li>
        <li>
          <Link to='/displayDeck'>display deck</Link>
        </li>
      </ul>
      <UserContext.Provider value='hello from context'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/AddCat'>
            <ContentCreator />
          </Route>
          <Route path='/game'>
            <Game />
          </Route>
          <Route path='/displayDeck'>
            <CardDeck />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}
