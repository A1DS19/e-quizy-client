import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Landing from './Landing';
import NavbarIndex from './resources/IndexNavbar';
import Footer from './resources/Footer';
import NotFound from './resources/NotFound';
//Auth
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
//Perfil
import UserProfile from '../components/Profile/UserProfile';
import UserProfileSettings from '../components/Profile/UserProfileSettings';
//Pruebas
import NewQuiz from './Quizes/NewQuiz';
import ListQuizes from './Quizes/ListQuizes';
import UpdateQuiz from './Quizes/UpdateQuiz';
import Questions from './Quizes/answers/Questions';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToastContainer />
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
          <Route exact path='/quizes/new_quiz' component={NewQuiz} />
          <Route exact path='/quizes/list_quizes' component={ListQuizes} />
          <Route exact path='/quizes/update_quiz/:id' component={UpdateQuiz} />
          <Route exact path='/quizes/questions/:id' component={Questions} />

          {/* Componente not found debe ir de ultimo */}
          <Route exact path='*' component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
