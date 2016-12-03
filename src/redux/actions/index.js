import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../reducers/counter'
import { ADD_THING, REMOVE_THING, RESET_THINGS } from '../reducers/things'

// Actions for counter
export const incrementCounter = (amount) => ({ type: INCREMENT_COUNTER, amount })
export const decrementCounter = (amount) => ({ type: DECREMENT_COUNTER, amount })

// Actions for things
export const addThing = (thing) => ({ type: ADD_THING, thing })
export const removeThing = (thing) => ({ type: REMOVE_THING, thing })
export const resetThings = () => ({ type: RESET_THINGS })
