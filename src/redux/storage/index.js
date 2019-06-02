import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { autoRehydrate, persistStore } from 'redux-persist'

import rootReducer from '../reducers'

const middleware = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, undefined, compose(middleware, autoRehydrate()))

persistStore(store, { storage: AsyncStorage })

export default store
