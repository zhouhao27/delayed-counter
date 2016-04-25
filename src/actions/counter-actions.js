import thunk from 'redux-thunk'
import * as actions from './action-types'

export function increase() {
  return {
    type: actions.INCREASE
  }
}

export function decrease() {
  return {
    type: actions.DECREASE
  }
}

export const delayedIncrease = () => {
  return (dispatch) => {
    dispatch({
      type: actions.DELAYING
    })
    setTimeout(() => {
      dispatch({
        type: actions.INCREASE
      });
      dispatch({
        type: actions.TIMEOUT
      })
    },2000);
  }
}

export const delayedDecrease = () => {
  return (dispatch) => {
    dispatch({
      type: actions.DELAYING
    })
    setTimeout(() => {
      dispatch({
        type: actions.DECREASE
      });
      dispatch({
        type: actions.TIMEOUT
      })
    },2000);
  }
}
