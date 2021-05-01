import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import Reactotron from '../../ReactotronConfig'
import homeReducer from './reducers/home'

// USE COMBINE REDUCERS IF U HAVE MULTIPLE REDUCERS, OF COURSE MULTIPLE :)
// JUST EXAMPLE, DONT FORGET TO IMPORT COMBINE REDUCERS FROM REDUX

// const combine = combineReducers({
//   reducerA,
//   reducerx
// })

const store = createStore(homeReducer, compose(applyMiddleware(ReduxThunk), Reactotron.createEnhancer()))

export default store