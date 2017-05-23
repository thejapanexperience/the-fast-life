import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signInWithGoogle, signOut, getUserFromDB } from '../actions/auth';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import { Grid, Row, Col } from 'react-flexbox-grid';


@connect(state => ({
  authenticated: state.auth.authenticated,
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
export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
    this._signOut = this._signOut.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  _signOut() {
    this.props.signOut();
  }

  render() {
    const { authenticated } = this.props;

    return (

      <div className="text-center">

        {authenticated ? <Link to={'/'}><FlatButton className="navButtons" label="Fast Life" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton className="navButtons" label="The Fast Life" secondary style={{ width: '140px', padding: '2px' }} /></Link>}

          {authenticated ? <Link to={'/myfasts'}><FlatButton className="navButtons" label="My Fasts" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/gallery'}><FlatButton className="navButtons" label="How To" secondary style={{ width: '140px', padding: '2px' }} /></Link>}

            {authenticated ? <Link to={'/newfast'}><FlatButton className="navButtons" label="New Fast" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton className="navButtons" disabled label=" " secondary style={{ width: '25%', padding: '2px' }} /></Link> }

              {authenticated ? <Link to={'/'}><FlatButton className="navButtons" onClick={this._signOut} label="Sign Out" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton className="navButtons" label="" disabled secondary style={{ width: '25%', padding: '2px' }} /></Link>}
                {/* {authenticated ? <Link to={'/'}><FlatButton className="navButtons" onClick={this._signOut} label="Sign Out" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton className="navButtons" label="Login" secondary style={{ width: '25%', padding: '2px' }} /></Link>} */}

      </div>


    );
  }
}
