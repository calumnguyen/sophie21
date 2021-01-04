import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './components/Home';
import LoginForm from './components/Login';
import auth from './services/authService';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <main className=' p-0 m-0'>
            <Switch>
              {!auth.getCurrentUser() && (
                <Route path='/login' component={LoginForm} />
              )}
              {auth.getCurrentUser() && (
                <Route path='/home' component={HomePage} />
              )}
              {auth.getCurrentUser() && <Redirect from='/' to='/home' />}
              {!auth.getCurrentUser() && <Redirect from='/' to='/login' />}
            </Switch>
          </main>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
