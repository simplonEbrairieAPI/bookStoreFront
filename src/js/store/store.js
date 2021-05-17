import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from './root'
const loggerMiddleware = createLogger();

//renvoie par default un store
export default preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      loggerMiddleware,
    )
  )
}