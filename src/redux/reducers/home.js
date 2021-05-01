import { ADD_COUNTER, SUBSTRACT_COUNTER } from '../types'

const initialState = {
  counter: 0
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return { ...state, counter: state.counter + 1 }
    case SUBSTRACT_COUNTER:
      return { ...state, counter: state.counter - 1 }
  }
  return state
}

export default homeReducer