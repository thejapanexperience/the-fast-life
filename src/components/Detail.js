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
import Divider from 'material-ui/Divider';


import { Grid, Row, Col } from 'react-flexbox-grid';

import * as NewFastActions from '../actions/NewFastActions';

@connect(state =>
   ({
     savedFasts: state.newFast.savedFasts,
   })

  , dispatch =>
   ({
     handleRequestDelete(strategy, strategies) {
      //  const index = strategies.indexOf(strategy);
      //  const toReturn = strategies.filter(str =>
      //    str !== strategy,
      // );
      //  dispatch(NewFastActions.hungerStrategies3(toReturn));
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
    const styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };

    const { savedFasts } = this.props;
    const { _reset } = this.props;
    const fast = savedFasts[0];
    const now = new Date();
    const a = moment(fast.startDate);
    const b = moment(now);
    const difference = b.diff(a, 'hours');
    const linearProgress = Math.round(difference / fast.duration * 100);

    return (
      <div>
        <br />
        <div className="col-sm-1" />
        <div className="col-sm-10" key={fast.id}>
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
            <CardMedia>
              <img src="Fasting3.png" />
            </CardMedia>
            <LinearProgress style={{ height: '80px' }} mode="determinate" value={linearProgress} />
            <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '5px', paddingBottom: '1px' }}title={fast.status} />
            <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '10px' }}>You have completed {linearProgress}% of this fast</CardText>
            <Divider />
            <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '1px' }}>Start Time</CardText>
            <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '5px' }} title={moment(fast.startDate).format('dddd, MMMM Do YYYY, h:mm a')} />
            <Divider />
            <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '1px' }}>Finish Time</CardText>
            <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '5px' }} title={moment(fast.endDate).format('dddd, MMMM Do YYYY, h:mm a')} />
            <Divider />
            <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '1px' }}>Duration</CardText>
            <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '5px' }} title={`${fast.duration} Hours`} />
            <Divider />
            <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '1px' }}>Hunger Strategies</CardText>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {fast.strategies.map(strategy =>
                (
                  <Chip
                    key={strategy}
                    style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}
                    onRequestDelete={() => handleRequestDelete(strategy, strategies)}
                  >
                    {strategy}
                  </Chip>
              ))}
            </div>
            <Divider />
            <CardActions>
              <Link to={'/myfasts'}><RaisedButton fullWidth secondary label="Stop Fast" /></Link>
              <Link to={'/myfasts'}><RaisedButton fullWidth label="Delete Fast" /></Link>
              <Link to={'/myfasts'}><RaisedButton fullWidth primary label="Return To My Fasts" /></Link>
            </CardActions>
          </Card>
          <br />
          <br />
        </div>
        <div className="col-sm-1" />


      </div>

    );
  }
}
