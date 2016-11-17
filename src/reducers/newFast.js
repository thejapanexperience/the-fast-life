const initialState = {
  strategy: '',
  startDate: '',
  endDate: '',
  time: '',
  finalDuration: 0,
  duration: 0,
  ownStrategy: '',
  strategies: [],
  completed: 100,
  showDate: true,
  showTime: true,
  showDuration: true,
  linearProgress: 1,
  savedFasts: [{
    strategies: ['Drink Water', 'Yoga'],
    startDate: 'Tue Nov 15 2016 22:01:00 GMT-0800 (PST)',
    endDate: 'Thu Nov 17 2016 10:01:00 GMT-0800 (PST)',
    duration: 36,
    status: 'In Progress',
    id: '123456789',
  }],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_STRATEGY_STRATEGIES':
      let { strategy, strategies } = action.payload;
      return Object.assign({}, state, {
        strategy,
        strategies,
        linearProgress: 100,
      });
    case 'UPDATE_WITH_OWN_STRATEGY':
      const strategies1 = action.payload.strategies;
      return Object.assign({}, state, {
        strategies: strategies1,
        linearProgress: 100,
        ownStrategy: '',
      });
    case 'OWN_STRATEGY':
      const { ownStrategy } = action.payload;
      return Object.assign({}, state, {
        ownStrategy,
        strategy: ownStrategy,
      });
    case 'START_DATE':
      const startDate = action.payload;
      return Object.assign({}, state, {
        startDate, showDate: false, linearProgress: 25,
      });
    case 'START_TIME':
      const time = action.payload.time;
      const date = action.payload.date;
      return Object.assign({}, state, {
        time,
        startDate: date,
        showTime: false,
        linearProgress: 50,
      });
    case 'FINAL_DURATION':
      const { finalDuration } = action.payload;
      return Object.assign({}, state, {
        finalDuration,
      });
    case 'DURATION':
      const { lastDuration, endDate } = action.payload;
      return Object.assign({}, state, {
        duration: lastDuration, endDate, showDuration: false,
        linearProgress: 75,
      });
    case 'SAVE':
      const { fast } = action.payload;
      const newSaved = [...savedFasts, fast];
      return Object.assign({}, state, {
        savedFasts: newSaved,
      });
    case 'RESET':
      return Object.assign({}, state, {
        strategy: '',
        startDate: '',
        endDate: '',
        time: '',
        finalDuration: 0,
        duration: 0,
        ownStrategy: '',
        strategies: [],
        completed: 100,
        showDate: true,
        showTime: true,
        showDuration: true,
        linearProgress: 1,
      });
    default:
      return state;
  }
}
