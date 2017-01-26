import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './redux/configureStore';

import App from './App'
import { Home, Court, Case } from './components/pages';
import './style/index.scss'

// Needed for onTouchTap with material-ui (temporary)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }}
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/court/:court" component={Court}/>
        <Route path="/case/:case" component={Case}/>
      </Route>
    </Router>
  </Provider>,
  rootEl
)
