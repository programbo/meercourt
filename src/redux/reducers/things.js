export const ADD_THING = 'add a thing'
export const REMOVE_THING = 'remove a thing'
export const RESET_THINGS = 'empty things list'

export default (state = [], { type, thing }) => {
  switch (type) {
    case ADD_THING:
      return [...state, thing]
    case REMOVE_THING:
      return state.filter((thingInState) => thingInState !== thing)
    case RESET_THINGS:
      return []
    default:
      return state
  }
}
