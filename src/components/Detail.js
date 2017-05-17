import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import moment from 'moment';
import uuid from 'uuid';
import axios from 'axios';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import injectTapEventPlugin from 'react-tap-event-plugin';
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
import Paper from 'material-ui/Paper';

import { Grid, Row, Col } from 'react-flexbox-grid';

import * as NewFastActions from '../actions/NewFastActions';
import * as DetailsActions from '../actions/DetailsActions';
import * as MyFastsActions from '../actions/MyFastsActions';

@connect(state =>
   ({
     loggedIn: state.auth.authenticated,
     user: state.auth.user,
     currentFast: state.myFasts.currentFast,
     comment1: state.details.comment1,
     comment2: state.details.comment2,
     updateDate1: state.details.updateDate1,
     updateDate2: state.details.updateDate2,
     strategy: state.newFast.strategy,
     ownStrategy: state.newFast.ownStrategy,
   })

  , dispatch =>
   ({
     _comment1(e, value) {
       dispatch(DetailsActions.comment1(value));
     },
     _comment2(comment, comments, id, currentFast) {
       const date = new Date();
       const newComment = { comment, date, editable: false };
       const newComments = [...comments, newComment];
       const updatedFast = currentFast;
       updatedFast.comments = newComments;
       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         console.log('res: ', res);
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _updateDate(e, value) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;
       const startDateNew = new Date(updatedFast.startDate);
       const startDateOld = new Date(updatedFast.startDate);

       const dateNew = value.getDate();
       const dateOld = startDateOld.getDate();
       if (dateNew !== dateOld) {
         startDateNew.setDate(dateNew);
       }
       const monthNew = value.getMonth();
       const monthOld = startDateOld.getMonth();
       if (monthOld !== monthNew) {
         startDateNew.setMonth(monthNew);
       }
       const yearNew = value.getYear();
       const yearOld = startDateOld.getYear();
       if (yearOld !== yearNew) {
         startDateNew.setYear(yearNew);
       }
       updatedFast.startDate = startDateNew;

       const duration = updatedFast.duration;
       const endDateNew = new Date(startDateNew);
       endDateNew.setHours(startDateNew.getHours() + duration);
       updatedFast.endDate = endDateNew;

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _updateTime(e, value) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;
       const startDateNew = new Date(updatedFast.startDate);
       const startDateOld = new Date(updatedFast.startDate);

       const hourNew = value.getHours();
       const hourOld = startDateOld.getHours();
       if (hourNew !== hourOld) {
         startDateNew.setHours(hourNew);
       }
       const minuteNew = value.getMinutes();
       const minuteOld = startDateOld.getMinutes();
       if (minuteOld !== minuteNew) {
         startDateNew.setMinutes(minuteNew);
       }
       updatedFast.startDate = startDateNew;

       const duration = updatedFast.duration;
       const endDateNew = new Date(startDateNew);
       endDateNew.setHours(startDateNew.getHours() + duration);
       updatedFast.endDate = endDateNew;

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _updateDuration(e, value) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;
       const endDateNew = new Date(updatedFast.startDate);
       endDateNew.setHours(endDateNew.getHours() + parseInt(value));
       updatedFast.endDate = endDateNew;
       updatedFast.duration = value;

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _addStrategy1(e, value) {
       dispatch(NewFastActions.hungerStrategies2(value));
     },
     _addStrategy2(strategy) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;
       const strategies = updatedFast.strategies;
       updatedFast.strategies = [...strategies, strategy];

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _deleteStrategy(strategy, strategies) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;

       const newStrategies = strategies.filter(str => str !== strategy);

       updatedFast.strategies = newStrategies;

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _deleteComment(comment) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;

       const newComments = updatedFast.comments.filter(obj =>
          obj.comment !== comment.comment,
       );

       updatedFast.comments = newComments;

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         console.log('res: ', res);
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _editComment1(comment) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;

       updatedFast.comments.forEach((obj) => {
         if (obj.date === comment.date) {
           obj.editable = true;
         } else {
           obj.editable = false;
         }
       });

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         console.log('res: ', res);
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _editComment2(comment) {
       const { currentFast } = this.props;
       const text = this.refs.editedDiaryEntry.getValue();
       const updatedFast = currentFast;

       updatedFast.comments.forEach((obj) => {
         if (obj.date === comment.date) {
           obj.comment = text;
           obj.editable = false;
         }
       });

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _stopFast(linearProgress) {
       const { currentFast } = this.props;
       const updatedFast = currentFast;

       updatedFast.status = 'stopped';
       updatedFast.linearProgress = linearProgress;

       axios.put('/api/fasts', { updatedFast })
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
         dispatch(MyFastsActions.setCurrentFast(updatedFast));
       });
     },
     _deleteFast() {
       const { currentFast } = this.props;
       axios.delete(`/api/fasts/${currentFast._id}`)
       .then((res) => {
         dispatch(NewFastActions.updateUser(res.data));
       });
     },
   }))

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

    const { user, currentFast, comment1, comment2, strategy, ownStrategy } = this.props;
    let { _comment1, _comment2, _updateDate, _updateTime, _updateDuration, _deleteStrategy, _addStrategy1, _addStrategy2, _deleteComment, _editComment1, _editComment2, _stopFast, _deleteFast } = this.props;

    _updateDate = _updateDate.bind(this);
    _updateTime = _updateTime.bind(this);
    _updateDuration = _updateDuration.bind(this);
    _deleteStrategy = _deleteStrategy.bind(this);
    _addStrategy2 = _addStrategy2.bind(this);
    _deleteComment = _deleteComment.bind(this);
    _editComment1 = _editComment1.bind(this);
    _editComment2 = _editComment2.bind(this);
    _stopFast = _stopFast.bind(this);
    _deleteFast = _deleteFast.bind(this);

    if (user === 'no user yet') {
      browserHistory.push('/myfasts');
    }

    const fast = currentFast;
    const now = new Date();
    const a = moment(fast.startDate);
    const b = moment(now);
    const difference = b.diff(a, 'hours');
    let linearProgress = Math.round(difference / fast.duration * 100);
    if (linearProgress > 100) {
      linearProgress = 100;
    }
    if (linearProgress < 0) {
      linearProgress = 1;
    }

    let theRender;
    fast.strategies ? theRender = (<div>
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
            title={user.displayName}
            subtitle={user.email}
            avatar={user.photoURL}
          />

          <Paper style={{ width: 'auto', padding: '10px', margin: '10px' }} zDepth={1} ><LinearProgress style={{ height: '80px' }} mode="determinate" value={linearProgress} /></Paper>
          <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '5px', paddingBottom: '1px' }}title={fast.status} />
          {currentFast.status === 'Stopped' || currentFast.status === 'Completed' ? <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '10px' }}>You have stopped this fast. You completed {linearProgress}% of this fast</CardText> : <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '10px' }}>You have completed {linearProgress}% of this fast</CardText>}


          <Divider />
          <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '21px', paddingBottom: '1px' }}>Start Time</CardText>
          <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '0px' }} title={moment(fast.startDate).format('dddd, MMMM Do YYYY, h:mm a')} />
          {currentFast.status === 'Stopped' || currentFast.status === 'Completed' ? null : <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '0px', paddingBottom: '1px' }}><DatePicker fullWidth hintText="Adjust Date" onChange={_updateDate} /></CardText>}
          {currentFast.status === 'Stopped' || currentFast.status === 'Completed' ? null : <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '0px' }}><TimePicker fullWidth hintText="Adjust Time" onChange={_updateTime} /></CardText>}


          <Divider />
          <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '1px' }}>Finish Time</CardText>
          <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '5px' }} title={moment(fast.endDate).format('dddd, MMMM Do YYYY, h:mm a')} />
          <Divider />
          <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '1px', marginTop: '0px' }}>Duration</CardText>
          <CardTitle style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }} title={`${fast.duration} Hours`} />
          {currentFast.status === 'Stopped' || currentFast.status === 'Completed' ? null :
          <CardText style={{ paddingTop: '0px', marginTop: '0px' }}>
            <TextField
              style={{ paddingTop: '0px', marginTop: '0px', paddingBottom: '0px' }}
              required
              fullWidth
              floatingLabelText="Change your fast Duration"
              hintText="New Duration"
              type="Number"
              min="1"
              onChange={_updateDuration}
            />
          </CardText>
            }


          <Divider />
          <CardText style={{ paddingLeft: '16px', paddingRight: '16px', paddingBottom: '1px' }}>Hunger Strategies</CardText>

          {currentFast.status === 'Stopped' || currentFast.status === 'Completed' ?
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
                      style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '0px' }}
                    >
                      {strategy}
                    </Chip>
                ))}
            </div> :
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
                      style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '0px' }}
                      onRequestDelete={() => _deleteStrategy(strategy, fast.strategies)}
                    >
                      {strategy}
                    </Chip>
                ))}
            </div>}


          <CardText
            style={{ paddingTop: '0', marginTop: '0', marginRight: '5px' }}
          >
            {currentFast.status === 'Stopped' || currentFast.status === 'Completed' ? null :
            <TextField
              id="addStrategy"
              floatingLabelText="Add another strategy"
              type="Text"
              onChange={_addStrategy1}
            />}

            {currentFast.status === 'Stopped' || currentFast.status === 'Completed' ? null : <FlatButton label="Add Strategy" secondary onClick={() => _addStrategy2(ownStrategy)} />}


          </CardText>
          <Divider />
          <CardTitle style={{ }} title="Your Fasting Diary" subtitle="Keeping track of your experience can help you get through the tough moments..." />
          <Paper style={{ padding: '10px', margin: '10px' }} zDepth={1} >
            <Paper>
              <CardText><TextField hintText="Add your diary entry here..." fullWidth multiLine onChange={_comment1} /></CardText>
            </Paper>
          </Paper>
          <Paper style={{ padding: '10px', margin: '10px' }} zDepth={1}><RaisedButton fullWidth label="Save diary entry" onClick={() => _comment2(comment1, currentFast.comments, currentFast._id, currentFast)} /></Paper>
          {currentFast.comments.length === 0
              ? null
              : fast.comments.map(comment =>
                <Paper style={{ padding: '10px', margin: '10px' }} zDepth={1}>
                  <Paper>
                    <CardText key={uuid()} style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '1px', paddingBottom: '5px' }} >
                      <p>{moment(comment.date).format(' MMM Do, k:mm ')}
                        {comment.editable === true ?
                          <FlatButton style={{ marginLeft: '16px' }} primary label="Save" onClick={() => _editComment2(comment)} />
                          :
                          <span>
                            <FlatButton style={{ marginLeft: '16px' }} secondary label="Edit" onClick={() => _editComment1(comment)} />
                            <FlatButton primary label="Delete" onClick={() => _deleteComment(comment)} />
                          </span>
                        }
                      </p>
                      {comment.editable === true
                        ?

                          <TextField
                            id="editableDiaryEntry"
                            fullWidth
                            multiLine
                            type="Text"
                            defaultValue={comment.comment}
                            ref="editedDiaryEntry"
                          />

                        :
                        <h5>{comment.comment}</h5>}
                    </CardText>
                  </Paper>
                </Paper>,
              )
            }
          <Divider />
          <CardActions>
            <Link to={'/myfasts'}><RaisedButton fullWidth label="Save Changes" /></Link>
            {currentFast.status === 'Stopped' || currentFast.status === 'Completed' || currentFast.status === 'Not yet started' ? null : <Link to={'/myfasts'}><RaisedButton secondary fullWidth label="Stop Fast" onClick={() => _stopFast(linearProgress)} /></Link>}
            <Link to={'/myfasts'}><RaisedButton fullWidth primary label="Delete Fast" onClick={_deleteFast} /></Link>
          </CardActions>
        </Card>
        <br />
        <br />
      </div>
      <div className="col-sm-1" />
    </div>) : theRender = <div />;


    return (

      theRender

    );
  }
}
