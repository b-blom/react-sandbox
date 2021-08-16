import React from 'react';
import { Link } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

export default function Router() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Router>
    </div>
  );
}
