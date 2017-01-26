import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

import counter from './counter'
import things from './things'

export default combineReducers({
  counter,
  things,
  firebase,
  routing
})
