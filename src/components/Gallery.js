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

export default class Gallery extends Component {

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

    if (loggedIn) {
      console.log('user.photoURL: ', user.photoURL);
    }

    let userData = null;
    if (!user._id && user.data) {
      userData = user.data;
    }

    if (userData) {
      user = userData;
    }

    if (!user) {
      this._signOut();
    }

    return (
      <div className="homeContainer">
        <Row>
          <Card style={{ width: '100%', padding: '5px' }}>
            { loggedIn ?
              <CardHeader
                title={user.displayName}
                subtitle={user.email}
                avatar={user.photoURL}
              /> : <CardHeader
                title="Here's a quick guide on how to use The Fast Life."
              />}
            {/* <CardMedia
              overlay={<CardTitle title="The Fast Life" subtitle="Plan your fasts for greater success" />}
              >
              <img src="Fasting.jpg" />
              </CardMedia>
              { loggedIn ?
              <RaisedButton onClick={this._signOut} primary style={{ width: '100%', paddingTop: '5px' }} label="Sign Out" /> :
              <RaisedButton onClick={this._googleSignIn} secondary style={{ width: '100%', paddingTop: '5px' }} label="Google Sign In" />
            } */}

            <div className="galleryBoxBox">
              <div className="galleryBox">

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife01.png" alt="step1" />
                  </div>
                  <div className="galleryText">
                    Come to The Fast Life.
                  </div>
                </div>

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife02.png" alt="step2" />
                  </div>
                  <div className="galleryText">
                    Sign-in with Google.
                  </div>
                </div>

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife03.png" alt="step3" />
                  </div>
                  <div className="galleryText">
                    You're in!
                  </div>
                </div>

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife04.png" alt="step4" />
                  </div>
                  <div className="galleryText">
                    View your completed fasts and overall stats by going to 'My Fasts'.
                  </div>
                </div>

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife04b.png" alt="step4b" />
                  </div>
                  <div className="galleryText">
                    Click on your fast to edit it. Add a diary entry to log how you're feeling. Delete it if you want to abort.
                  </div>
                </div>

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife05a.png" alt="step5" />
                  </div>
                  <div className="galleryText">
                    Make a new fast by going to 'New Fast'.
                  </div>
                </div>

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife05b.png" alt="step6" />
                  </div>
                  <div className="galleryText">
                    Watch your fast get built as you design it.
                  </div>
                </div>

                <div className="galleryItem">
                  <div className="galleryImageBox">
                    <img className="galleryImage" src="./theFastLife06.png" alt="step7" />
                  </div>
                  <div className="galleryText">
                    End your session at any time by clicking 'Sign Out'
                  </div>
                </div>

              </div>
            </div>

          </Card>
        </Row>
      </div>


    );
  }
}
