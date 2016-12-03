import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'

import App from './App'
import { Things, Home } from './components/pages';
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore)
const store = createStoreWithMiddleware(reducers)
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/things" component={Things}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
