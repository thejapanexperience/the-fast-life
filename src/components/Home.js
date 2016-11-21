import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle, signOut, getUserFromDB } from '../actions/auth';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { Grid, Row, Col } from 'react-flexbox-grid';

@connect(state => ({
  loggedIn: state.auth.authenticated,
  user: state.auth.user,
}), dispatch => ({
  signOut() {
    dispatch(signOut());
  },
  googleSignIn() {
    dispatch(signInWithGoogle());
  },
}))

export default class Home extends Component {

  constructor() {
    super();

    this._googleSignIn = this._googleSignIn.bind(this);
    this._signOut = this._signOut.bind(this);
  }

  _googleSignIn() {
    this.props.googleSignIn();
  }

  _signOut() {
    this.props.signOut();
  }

  render() {
    let { loggedIn, user } = this.props;
    console.log('user: ', user);

    let userData = null;
    if (!user._id && user.data) {
      userData = user.data;
    }

    if (userData) {
      user = userData;
    }
    console.log('user: ', user);

    if (!user) {
      this._signOut();
    }

    return (
      <div>
        <Row>
          <Card style={{ width: '100%', padding: '5px' }}>
            { loggedIn ? <CardHeader
              title={user.displayName}
              subtitle={user.email}
              avatar={user.photoURL}
            /> : <CardHeader
              title="Welcome to the Fast Life..."
              subtitle="Click Below To Sign In"
            />}
            <CardMedia
              overlay={<CardTitle title="The Fast Life" subtitle="Plan your fasts for greater success" />}
            >
              <img src="Fasting.jpg" />
            </CardMedia>
            { loggedIn ?
              <RaisedButton onClick={this._signOut} primary style={{ width: '100%', paddingTop: '5px' }} label="Sign Out" /> :
              <RaisedButton onClick={this._googleSignIn} secondary style={{ width: '100%', paddingTop: '5px' }} label="Google Sign In" />
            }
          </Card>
        </Row>
      </div>


    );
  }
}
