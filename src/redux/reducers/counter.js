export const INCREMENT_COUNTER = 'increment counter'
export const DECREMENT_COUNTER = 'decrement counter'

export default (state = 0, { type, amount = 1 }) => {
  switch (type) {
    case INCREMENT_COUNTER:
      return state + amount
    case DECREMENT_COUNTER:
      return state - amount
    default:
      return state
  }
}
