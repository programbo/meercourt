import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import reducers from './redux/reducers'

import App from './App'
import { Home, Court, Case } from './components/pages';
import './style/index.scss'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const firebase = {
  config: {
    apiKey: 'AIzaSyAGuOe9KOA0qR4hrQOW_nazoo6y-GfKCs8',
    authDomain: 'meercourt-d8ac7.firebaseapp.com',
    databaseURL: 'https://meercourt-d8ac7.firebaseio.com',
    storageBucket: 'meercourt-d8ac7.appspot.com',
    messagingSenderId: '153305987866'
  },
  settings: {
    userProfile: 'users',
    enableLogging: false,
    updateProfileOnLogin: true
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
  reactReduxFirebase(firebase.config, firebase.settings)
)(createStore)
const store = createStoreWithMiddleware(reducers)
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
