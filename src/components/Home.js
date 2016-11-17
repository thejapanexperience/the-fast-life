import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle, signOut } from '../actions/auth';

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
    const { loggedIn, user } = this.props;
    console.log('loggedIn: ', loggedIn);
    return (
      <div>
        <Row>
          <Card style={{ width: '100%', padding: '5px' }}>
            {/* <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="Fasting.jpg"
            /> */}
            <CardMedia
              overlay={<CardTitle title="Fast Life" subtitle="Plan your fasts for greater success" />}
            >
              <img src="Fasting.jpg" />
            </CardMedia>
            { loggedIn ?
              <RaisedButton onClick={this._signOut} primary style={{ width: '100%', paddingTop: '5px' }} label="Sign Out" /> :
              <RaisedButton onClick={this._googleSignIn} secondary style={{ width: '100%', paddingTop: '5px' }} label="Google Sign In" />
            }
            {/* <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText> */}
          </Card>
        </Row>
      </div>


    );
  }
}
