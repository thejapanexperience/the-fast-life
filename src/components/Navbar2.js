import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


@connect(state => ({
  authenticated: state.auth.authenticated,
}))
export default class Navbar extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav">


              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/signin'}>Sign In</Link></li>

              {authenticated ? <li><Link to={'/secret'}>Secret</Link></li> : <li />}

            </ul>

          </div>
        </div>
      </nav>
    );
  }
}
