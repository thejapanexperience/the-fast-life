import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MyRouter from './components/MyRouter';
import { initAuth } from './actions/auth';

import store from './store';

// put render inside this initial authorisation check
initAuth(store.dispatch)
.then(() => {
  render(
    <MuiThemeProvider>
      <Provider store={store}>
        <MyRouter />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'),
  );
});
