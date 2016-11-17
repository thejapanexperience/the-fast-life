import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
}))
export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }


  render() {
    const { authenticated } = this.props;

    return (

      <div className="text-center">

        {authenticated ? <Link to={'/'}><FlatButton label="The Fast Life" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton label="The Fast Life" secondary style={{ width: '25%', padding: '2px' }} /></Link>}
        {authenticated ? <Link to={'/myfasts'}><FlatButton label="My Fasts" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton disabled label=" " secondary style={{ width: '25%', padding: '2px' }} /></Link>}
        {authenticated ? <Link to={'/newfast'}><FlatButton label="New Fast" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton disabled label=" " secondary style={{ width: '25%', padding: '2px' }} /></Link> }
        {authenticated ? <Link to={'/'}><FlatButton label="Logout" primary style={{ width: '25%', padding: '2px' }} /></Link> : <Link to={'/'}><FlatButton label="Login" secondary style={{ width: '25%', padding: '2px' }} /></Link>}

      </div>


    );
  }
}
