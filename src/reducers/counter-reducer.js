import * as actions from '../actions/action-types'

const initialState = {
  delaying: false,
  count: 0
}

export default function counter(state = initialState, action) {
  switch(action.type) {
    case actions.INCREASE:
      return {
        ...state,
        count: state.count + 1
      }
    case actions.DECREASE:
      return {
        ...state,
        count: state.count - 1
      }
    case actions.DELAYING:
      return {
        ...state,
        delaying: true
      }
    case actions.TIMEOUT:
      return {
        ...state,
        delaying: false
      }
    default:
      return state
  }
}
