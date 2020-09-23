import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import '../assets/css/bootstrap.min.css';
import '../assets/scss/paper-kit.scss?v=1.2.0';
import '../assets/demo/demo.css?v=1.2.0';

// components
import Index from '../views/Index.js';
import NucleoIcons from '../views/NucleoIcons.js';
import LandingPage from '../views/examples/LandingPage.js';
import ProfilePage from '../views/examples/ProfilePage.js';
import RegisterPage from '../views/examples/RegisterPage.js';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <Index {...props} />} />
          <Route
            exact
            path='/nucleo-icons'
            render={(props) => <NucleoIcons {...props} />}
          />
          <Route
            exact
            path='/landing-page'
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            exact
            path='/profile-page'
            render={(props) => <ProfilePage {...props} />}
          />
          <Route
            exact
            path='/register-page'
            render={(props) => <RegisterPage {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
