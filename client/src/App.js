import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ItemState from './context/item/ItemState';
import ModalState from './context/modal/ModalState';
import AuthState from './context/auth/AuthState';

import Items from './components/items/Items';

import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/layout/Login';


function App() {
  
  return (
    <AuthState>
      <ModalState>
        <ItemState>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <PrivateRoute exact path='/' component={Items} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </ItemState>
      </ModalState>
    </AuthState>
  );
}

export default App;
