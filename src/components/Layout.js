import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';

export default class Layout extends Component {
  render() {
    return (
      <div className="bodyContainer">
        <div className="mainContainer">
          <Navbar />
          <div className="col-sm-12" />
          {/* <div className="col-sm-1" id="WHERE?" /> */}
          <div className="col-sm-12" style={{ padding: '5px' }}>
            {this.props.children}
          </div>
          {/* <div className="col-sm-1" /> */}
        </div>
      </div>
    );
  }
}
