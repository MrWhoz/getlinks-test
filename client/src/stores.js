// @flow
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import type {StoreEnhancer} from 'redux'
import type {State, Action} from 'modules/Common/types'
type Composer = typeof compose;
const  composeEnhancers: Composer =
  global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const  enhancer: StoreEnhancer<State, Action<*>> = composeEnhancers(
  applyMiddleware(thunk)
)

const  store = createStore(reducers, enhancer)
export default store
