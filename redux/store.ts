import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configureStore(initState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]

  const enhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
    // ... ohter enhancers
  )

  const store: any = createStore(rootReducer, initState, enhancers)

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}
