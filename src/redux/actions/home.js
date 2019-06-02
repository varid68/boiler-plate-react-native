import { SET_STATUS } from './types'

export function setStatus() {
  return (dispatch) => {
    try {
      dispatch({ type: SET_STATUS })
    } catch (error) {
      dispatch({ type: SET_STATUS })
    }
  }
}

export function setToggle() {
  return (dispatch) => {
    try {
      dispatch({ type: SET_STATUS })
    } catch (error) {
      dispatch({ type: SET_STATUS })
    }
  }
}
