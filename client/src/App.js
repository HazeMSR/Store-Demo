import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ItemState from './context/item/ItemState';
import ModalState from './context/modal/ModalState';
import AuthState from './context/auth/AuthState';

import Modal from './components/layout/Modal';
import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/layout/Login';

import Home from './pages/Home';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token)  {
  console.log('TOKEN: ',localStorage.token);
  setAuthToken(localStorage.token);
} else { console.log('NO pudo entrar'); }

function App() {
  
  return (
    <AuthState>
      <ModalState>
        <ItemState>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
              </Switch>
              <Modal />
            </div>
          </Router>
        </ItemState>
      </ModalState>
    </AuthState>
  );
}

export default App;
