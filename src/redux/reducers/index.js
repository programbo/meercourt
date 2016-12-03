import { combineReducers } from 'redux'

import counter from './counter'
import things from './things'

export default combineReducers({
  counter,
  things
})
