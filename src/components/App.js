import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Landing from './Landing';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import NavbarIndex from './resources/IndexNavbar';
import Footer from './resources/Footer';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarIndex />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/auth/register' component={Register} />
          <Route exact path='/auth/login' component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
