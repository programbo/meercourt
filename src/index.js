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
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAGuOe9KOA0qR4hrQOW_nazoo6y-GfKCs8",
  authDomain: "meercourt-d8ac7.firebaseapp.com",
  databaseURL: "https://meercourt-d8ac7.firebaseio.com",
  storageBucket: "meercourt-d8ac7.appspot.com",
  messagingSenderId: "153305987866"
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
  reactReduxFirebase(firebaseConfig, { userProfile: 'users' })
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
