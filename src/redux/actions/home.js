import { SET_STATUS } from '../actions/types'

export function setStatus() {
  return dispatch => {
    try {
      dispatch({ type: SET_STATUS })
    } catch (error) {
      dispatch({ type: SET_STATUS })
    }
  }
}
