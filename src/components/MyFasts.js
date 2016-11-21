import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import axios from 'axios';
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
import Paper from 'material-ui/Paper';


import { Grid, Row, Col } from 'react-flexbox-grid';

import * as NewFastActions from '../actions/NewFastActions';
import * as MyFastsActions from '../actions/MyFastsActions';

@connect(state =>
   ({
     loggedIn: state.auth.authenticated,
     user: state.auth.user,
     usersFasts: state.myFasts.usersFasts,
   })

  , dispatch =>
   ({
     _reset() {
       dispatch(NewFastActions.reset());
     },
     _getUser(id) {
       axios.get(`/api/fasts/${id}`)
       .then(fasts => dispatch(MyFastsActions.getFasts(fasts)));
     },
     _setCurrentFast(fast) {
       dispatch(MyFastsActions.setCurrentFast(fast));
     },
   }),
  )

export default class MyFasts extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    if (!this.props.user._id) {
      console.log('no user._id / this.props.user: ', this.props.user);
    }
  }

  render() {
    let { user } = this.props;
    const { _getFasts, _setCurrentFast } = this.props;

    let userData = null;
    if (!user._id && user.data) {
      userData = user.data;
    }

    if (userData) {
      user = userData;
    }
    console.log('user: ', user);

    if (!user) {
      browserHistory.push('/');
    }

    let usersFasts = [];

    if (user.fasts) {
      usersFasts = user.fasts;
    }

    console.log('usersFasts1: ', usersFasts);

    usersFasts.forEach((fast) => {
      const now = new Date();
      const a = moment(fast.startDate);
      const b = moment(now);
      const difference = b.diff(a, 'hours');
      const linearProgress = fast.linearProgress || Math.round(difference / fast.duration * 100);
      console.log('linearProgress: ', linearProgress);

      if (!fast.linearProgress && linearProgress > 100) {
        fast.status = 'Completed';
      }
      if (!fast.linearProgress && linearProgress <= 0) {
        fast.status = 'Not yet started';
      }
      if (!fast.linearProgress && linearProgress > -1 && linearProgress < 100) {
        fast.status = 'In progress';
      }
      if (fast.linearProgress) {
        fast.status = 'Stopped';
      }
      console.log('fast.status: ', fast.status);
    });

    usersFasts.sort((a, b) => {
      if (a.startDate < b.startDate) return -1;
      if (a.startDate > b.startDate) return 1;
      return 0;
    });

    usersFasts.forEach((fast, i) => {
      if (fast.status === 'In progress') {
        let temp = [];
        temp.push(fast);
        usersFasts.splice(i, 1);
        usersFasts.unshift(temp[0]);
        temp = [];
      }
      if (fast.status === 'Completed') {
        let temp = [];
        temp.push(fast);
        usersFasts.splice(i, 1);
        usersFasts.push(temp[0]);
        temp = [];
      }
    });

    usersFasts.forEach((fast, i) => {
      if (fast.status === 'Stopped') {
        let temp = [];
        temp.push(fast);
        usersFasts.splice(i, 1);
        usersFasts.push(temp[0]);
        temp = [];
      }
    });

    const stats = {
      length: 0,
      totalCompleted: 0,
      totalAttempted: 0,
      aveLength: 0,
      successRate: 0,
    };

    usersFasts.forEach((fast) => {
      if (fast.status === 'Completed') {
        stats.length += fast.duration;
        stats.totalCompleted += 1;
        stats.totalAttempted += 1;
      }
      if (fast.status === 'Stopped') {
        stats.length += fast.duration;
        stats.totalAttempted += 1;
      }
    });

    stats.aveLength = Math.round(stats.length / stats.totalAttempted * 10) / 10;
    stats.successRate = Math.round(stats.totalCompleted / stats.totalAttempted * 100);

    console.log('stats: ', stats);

    console.log('user: ', user);
    console.log('usersFasts2: ', usersFasts);

    return (
      <div>
        <div className="col-sm-12">
          <Card style={{ margin: '10px' }}>
            <Paper style={{ padding: '10px' }}>
              <Paper style={{ padding: '10px' }}>
                <div className="row">
                  <div className="col-xs-12"><CardTitle title="My Fasting Life - Statistics" subtitle="Average Fast Length" /></div>
                  <div className="col-sm-3"><CardTitle title={`${stats.totalAttempted}`} subtitle="Attemtped Fasts" /></div>
                  <div className="col-sm-3"><CardTitle title={`${stats.totalCompleted}`} subtitle="Successful Fasts" /></div>
                  <div className="col-sm-3"><CardTitle title={`${stats.successRate} %`} subtitle="Success Rate" /></div>
                  <div className="col-sm-3"><CardTitle title={`${stats.aveLength} Hours`} subtitle="Average Length" /></div>
                </div>
              </Paper>
            </Paper>
          </Card>
        </div>


        {user.fasts && user.fasts.length > 0 ?

          usersFasts.map((fast) => {
            const now = new Date();
            const a = moment(fast.startDate);
            const b = moment(now);
            const difference = b.diff(a, 'hours');
            let linearProgress = fast.linearProgress || Math.round(difference / fast.duration * 100);
            if (!fast.linearProgress && linearProgress > 100) {
              fast.status = 'Completed';
              console.log('linearProgress, fast.status: ', linearProgress, fast.status);
            }
            if (!fast.linearProgress && linearProgress < 0) {
              fast.status = 'Not yet started';
              console.log('linearProgress, fast.status: ', linearProgress, fast.status);
            }
            if (!fast.linearProgress && linearProgress > -1 && linearProgress < 100) {
              fast.status = 'In progress';
              console.log('linearProgress, fast.status: ', linearProgress, fast.status);
            }
            if (fast.linearProgress) {
              linearProgress = fast.linearProgress;
              fast.status = 'Stopped';
              console.log('linearProgress, fast.status: ', linearProgress, fast.status);
            }
            return (
              <div className="col-sm-4" key={fast._id}>
                <Card style={{ margin: '10px' }}>
                  <CardHeader
                    subtitle=""
                    title=""
                    style={{ height: '40px' }}
                  />
                  <CardMedia
                    overlay={<CardTitle title={`${fast.duration} Hour Fast`} subtitle={moment(fast.startDate).format('ddd, MMM Do, h:mm a')} />}
                  >
                    <img src="Fasting2.jpg" />
                  </CardMedia>
                  <CardTitle subtitle={fast.status} style={{ textAlign: 'center', marginTop: '5px', paddingTop: '5px', marginBottom: '0', paddingBottom: '0' }} />
                  <Paper style={{ width: 'auto', padding: '10px', margin: '10px', marginTop: '2px' }} zDepth={1} ><LinearProgress style={{ height: '20px' }} mode="determinate" value={linearProgress} /></Paper>
                  <CardActions>
                    <Link to={'/fastdetail'}><RaisedButton fullWidth secondary label="View Fast" onClick={() => _setCurrentFast(fast)} /></Link>
                  </CardActions>
                </Card>
              </div>
            );
          }) :
          <div className="col-sm-4" >
            <Card
              style={{
                margin: '10px',
              }}
            >
              <CardHeader
                subtitle={'click the button below'}
                title={'Add your first fast'}
                avatar={user.photoURL}
              />
              <CardMedia >
                <img src="Fasting2.jpg" />
              </CardMedia>
              <CardActions>
                <Link to={'/newfast'}><RaisedButton fullWidth secondary label="Make New Fast" /></Link>
              </CardActions>
            </Card>
          </div>
          }
        <br />
        <br />


      </div>

    );
  }
}
