import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import moment from 'moment';
import uuid from 'uuid';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { blue300, indigo900 } from 'material-ui/styles/colors';
import Badge from 'material-ui/Badge';


import { Grid, Row, Col } from 'react-flexbox-grid';

import * as NewFastActions from '../actions/NewFastActions';

@connect(state =>
   ({
     savedFasts: state.newFast.savedFasts,
   })

  , dispatch =>
   ({
     _reset() {
       dispatch(NewFastActions.reset());
     },
   })
,

  )

export default class MyFasts extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { savedFasts } = this.props;
    const { _reset } = this.props;

    console.log('savedFasts: ', savedFasts);

    return (
      <div>
        <br />
        {savedFasts.map(fast =>
          (
            <div className="col-sm-4" key={fast.id}>
              <Card
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                }}
              >
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="images/jsa-128.jpg"
                />
                <CardMedia
                  overlay={<CardTitle title={`${fast.duration} Hour Fast`} subtitle={moment(fast.startDate).format('dddd, MMMM Do YYYY, h:mm a')} />}
                >
                  <img src="Fasting2.jpg" />
                </CardMedia>
                <CardTitle title={fast.status} />
                <CardActions>
                  <Link to={'/fastdetail'}><RaisedButton fullWidth primary label="View Fast" /></Link>
                </CardActions>
              </Card>
            </div>
          ),
        )}
        <br />
        <br />


      </div>

    );
  }
}
