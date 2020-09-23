import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import '../assets/css/bootstrap.min.css';
import '../assets/scss/paper-kit.scss?v=1.2.0';
import '../assets/demo/demo.css?v=1.2.0';

// components
import Landing from './Landing';
import Navbar from './Navbars/IndexNavbar';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
