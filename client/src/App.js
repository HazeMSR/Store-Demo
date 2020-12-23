import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ItemState from './context/item/ItemState';
import ModalState from './context/modal/ModalState';

import Items from './components/items/Items';
import ModifyItem from './components/items/ModifyItem';
import FindItem from './components/items/FindItem';

import Navbar from './components/layout/Navbar';

function App() {
  
  return (
    <ModalState>
      <ItemState>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Items} />
              <Route exact path='/add' component={ModifyItem} />
              <Route exact path='/find' component={FindItem} />
            </Switch>
          </div>
        </Router>
      </ItemState>
    </ModalState>
  );
}

export default App;
