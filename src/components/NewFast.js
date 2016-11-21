import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import moment from 'moment';
import uuid from 'uuid';
import axios from 'axios';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
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


injectTapEventPlugin();

@connect(state =>
   ({
     loggedIn: state.auth.authenticated,
     user: state.auth.user,
     strategy: state.newFast.strategy,
     startDate: state.newFast.startDate,
     endDate: state.newFast.endDate,
     time: state.newFast.time,
     finalDuration: state.newFast.finalDuration,
     duration: state.newFast.duration,
     ownStrategy: state.newFast.ownStrategy,
     strategies: state.newFast.strategies,
     completed: state.newFast.completed,
     showDate: state.newFast.showDate,
     showTime: state.newFast.showTime,
     showDuration: state.newFast.showDuration,
     linearProgress: state.newFast.linearProgress,
   })

  , dispatch =>
   ({
     _hungerStrategies(event, index, strategy) {
       const { strategies } = this.props;
       const newStrategies = [...strategies, strategy];
       dispatch(NewFastActions.hungerStrategies(strategy, newStrategies));
     },
     _hungerStrategies2(event, ownStrategy) {
       dispatch(NewFastActions.hungerStrategies2(ownStrategy));
     },
     _hungerStrategies3(strategy) {
       const { strategies } = this.props;
       const newStrategies = [...strategies, strategy];
       dispatch(NewFastActions.hungerStrategies3(newStrategies));
     },
     _startDate(event, startDate) {
       dispatch(NewFastActions.startDate(startDate));
     },
     _startTime(event, time) {
       const { startDate } = this.props;
       const hours = time.getHours();
       const minutes = time.getMinutes();
       startDate.setHours(hours);
       startDate.setMinutes(minutes);
       dispatch(NewFastActions.startTime(time, startDate));
     },
     _duration(event, finalDuration) {
       dispatch(NewFastActions.finalDuration(finalDuration));
     },
     _duration2() {
       const { startDate, finalDuration } = this.props;
       const finalDate = new Date(startDate);
       finalDate.setHours(finalDate.getHours() + parseInt(finalDuration));
       dispatch(NewFastActions.duration(finalDuration, finalDate));
     },
     handleRequestDelete(strategy, strategies) {
       const index = strategies.indexOf(strategy);
       const toReturn = strategies.filter(str =>
         str !== strategy,
      );
       dispatch(NewFastActions.hungerStrategies3(toReturn));
     },
     _saveFast() {
       let id;
       if (this.props.user._id) {
         id = this.props.user._id;
       } else if (this.props.user.data._id) {
         id = this.props.user.data._id;
       }
       const fast = {
         duration: this.props.duration,
         endDate: this.props.endDate,
         startDate: this.props.startDate,
         status: '',
         strategies: this.props.strategies,
         user: [id],
       };
       axios.post('/api/fasts', fast)
       .then((user) => {
         console.log('user: ', user);
         this.props._reset();
         dispatch(NewFastActions.updateUser(user.data));
       });
     },
     _reset() {
       dispatch(NewFastActions.reset());
     },
   })
,

  )

export default class NewFast extends Component {

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
        textAlign: 'center',
      },
    };

    let { user, strategy, startDate, endDate, time, finalDuration, duration, ownStrategy, strategies, completed, showDate, showTime, showDuration, linearProgress } = this.props;
    let { _hungerStrategies, _hungerStrategies2, _hungerStrategies3, _startDate, _startTime, _duration, _duration2, handleRequestDelete, _saveFast, _reset } = this.props;

    _startTime = _startTime.bind(this);
    _duration2 = _duration2.bind(this);
    _hungerStrategies = _hungerStrategies.bind(this);
    _hungerStrategies3 = _hungerStrategies3.bind(this);
    _saveFast = _saveFast.bind(this);

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
      browserHistory.push('/');
    }

    return (
      <div>
        <br />
        <div className="col-sm-6">
          <Paper
            style={{ width: 'auto', padding: '20px',
              marginLeft: '10px',
              marginRight: '10px',
              marginBottom: '10px',
            }}
            zDepth={1}
          >
            <Card
              style={{ width: 'auto', padding: '20px',

              }}
            >
              <CardText style={{ color: '#ff4081', fontSize: '2em', textAlign: 'left' }} >DESIGN HERE</CardText>

              {showDate ?
                <DatePicker
                  fullWidth
                  style={{ textAlign: 'center' }}
                  floatingLabelText="Start Date"
                  hintText="Choose Start Date"
                  mode="landscape"
                  onChange={_startDate}
                />
              : null}

              {startDate && showTime ?
                <TimePicker
                  fullWidth
                  style={{ textAlign: 'center' }}
                  floatingLabelText="Start Time"
                  hintText="Choose Start Time"
                  onChange={_startTime}
                /> : null}
              {
                time && showDuration ?
                  <TextField
                    fullWidth
                    required
                    floatingLabelText="Fast Duration in Hours"
                    hintText="Fast Duration"
                    type="Number"
                    min="1"
                    onChange={_duration}
                  />
              : null}
              {
                time && showDuration ?
                  <br />
              : null}
              {
                time && showDuration && finalDuration ?
                  <RaisedButton fullWidth label="Add Duration" secondary onClick={_duration2} /> : null}
              {duration ?
                <SelectField
                  fullWidth
                  floatingLabelText="Hunger Coping Strategies"
                  value={strategy}
                  onChange={_hungerStrategies}
                >
                  {/* {ownStrategy ? <MenuItem value={ownStrategy} primaryText={ownStrategy} /> : null} */}
                  <MenuItem value={'Drink Water'} primaryText="Drink Water" />
                  <MenuItem value={'Meditate'} primaryText="Meditate" />
                  <MenuItem value={'Exercise'} primaryText="Exercise" />
                  <MenuItem value={'Stay Busy'} primaryText="Stay Busy" />
                </SelectField>
              : null}
              {duration ?
                <TextField
                  style={{ paddingBottom: '0px', marginBottom: '1px' }}
                  fullWidth
                  floatingLabelText="Add Own Hunger Coping Method"
                  type="Text"
                  onChange={_hungerStrategies2}
                />
              : null}

              {ownStrategy ? <RaisedButton fullWidth style={{ textAlign: 'center' }} label="Add Strategy" onClick={() => _hungerStrategies3(ownStrategy)} /> : null }
              {/* {linearProgress === 100 ? <CardText></CardText> : null} */}
              {linearProgress === 100 ? <Link to={'/myfasts'}><RaisedButton fullWidth style={{ textAlign: 'center' }} label="Save Fast" secondary onClick={() => _saveFast()} /></Link> : null}
              {linearProgress > 1 ? <RaisedButton fullWidth style={{ textAlign: 'center' }} label="Discard" primary onClick={() => _reset()} /> : null}

            </Card>
          </Paper>

        </div>
        <div className="col-sm-6">
          <Paper
            style={{ width: 'auto', padding: '20px',
              marginLeft: '10px',
              marginRight: '10px',
            }}
            zDepth={1}
          >
            <Card
              style={{ width: 'auto', padding: '20px',

              }}
            >
              <CardHeader
                title={user.displayName}
                subtitle={user.email}
                avatar={user.photoURL}
              />
              <div>
                <CardText style={{ color: '#ff4081', fontSize: '2em', textAlign: 'left' }} >YOUR FAST</CardText>
                <LinearProgress style={{ height: '80px' }} mode="determinate" value={linearProgress} />
              </div>
              <br />
              <CardText style={{ textAlign: 'left', color: '#ff4081' }}>
                {startDate ? 'Start : ' : ''}
                {startDate ? `${moment(startDate).format('dddd, MMMM Do YYYY, h:mm a')}` : ''}
                {startDate ? <hr /> : null}
                {endDate ? 'End : ' : ''}
                {endDate ? `${moment(endDate).format('dddd, MMMM Do YYYY, h:mm a')}` : ''}
                {endDate ? <hr /> : null}
                {duration ? 'Duration : ' : ''}
                {duration ? `${duration} hours` : ''}
                {duration ? <hr /> : null}
                {strategies.length > 0 ? 'Hunger Strategies' : ''}
                <br />
                <br />
                <div style={styles.wrapper}>
                  {strategies.map(strategy =>
                    (
                      <Chip
                        key={strategy}
                        style={{ marginRight: '4px' }}
                        onRequestDelete={() => handleRequestDelete(strategy, strategies)}
                      >
                        {strategy}
                      </Chip>
                  ))}
                </div>
              </CardText>
            </Card>
          </Paper>
        </div>

      </div>

    );
  }
}
