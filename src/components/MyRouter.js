import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { firebaseAuth } from '../firebase';

import Layout from './Layout';
import Home from './Home';
import MyFasts from './MyFasts';
import NewFast from './NewFast';
import Detail from './Detail';

function authCheck(nextState, transition) {
  const user = firebaseAuth.currentUser;
  if (!user) {
    transition('/signin');
  }
}

export default class MyRouter extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/myfasts" component={MyFasts} onEnter={authCheck} />
          <Route path="/newfast" component={NewFast} onEnter={authCheck} />
          <Route path="/fastdetail" component={Detail} onEnter={authCheck} />
        </Route>
      </Router>
    );
  }
}
