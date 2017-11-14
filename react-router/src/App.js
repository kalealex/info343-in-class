import React, { Component } from 'react';
// import './App.css';

import {BrowserRouter as Router, Switch,Redirect, Route, Link}
  from "react-router-dom"; // use HashRouter for older browsers

import constants from "./components/constants";
import SignInView from "./components/SignIn";
import SignUpView from "./components/SignUp";
import ChannelView from "./components/Channel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron bg-dark">
          <h1 className="display-3 text-light">React: Router Demo</h1>
        </header>
        <div className="container">
          <div className="row">
            <Router>
              {/* what follows is a list of conditional options */}
              <Switch>
                <Route exact path={constants.routes.signin} component={SignInView} />
                <Route path={constants.routes.signup} component={SignUpView} />
                <Route path={constants.routes.channel} component={ChannelView} />
                <Route component={SignUpView} /> {/* default option */}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
