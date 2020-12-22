import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ItemState from './context/item/ItemState';

import Items from './components/items/Items';
import AddItem from './components/items/AddItem';
import FindItem from './components/items/FindItem';

import Navbar from './components/layout/Navbar';

function App() {
  
  return (
    <ItemState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Items} />
            <Route exact path='/add' component={AddItem} />
            <Route exact path='/find' component={FindItem} />
            <Route exact path='/modify' component={Items} />
            <Route exact path='/delete' component={Items} />
          </Switch>
        </div>
      </Router>
    </ItemState>
  );
}

export default App;
