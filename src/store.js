import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers/index';

const middleware = [
  thunkMiddleware,
  promiseMiddleware(),
  // ...
];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;
