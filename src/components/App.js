import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Landing from './Landing';
import NavbarIndex from './resources/IndexNavbar';
import Footer from './resources/Footer';
//Auth
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
//Profile
import UserProfile from '../components/Profile/UserProfile';
import UserProfileSettings from '../components/Profile/UserProfileSettings';
import UserDireccion from '../components/Profile/UserDireccion';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarIndex />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/auth/register' component={Register} />
          <Route exact path='/auth/login' component={Login} />
          <Route exact path='/profile/user_profile' component={UserProfile} />
          <Route
            exact
            path='/profile/user_profile_settings'
            component={UserProfileSettings}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
