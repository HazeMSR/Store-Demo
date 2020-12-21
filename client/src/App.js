import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ItemState from './context/item/ItemState';

import Items from './components/items/Items';

import Home from './pages/Home';
import Navbar from './components/layout/Navbar';

function App() {
  
  return (
    <ItemState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/find' component={Items} />
          </Switch>
        </div>
      </Router>
    </ItemState>
  );
}

export default App;
