import React,{Component} from 'react-native'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './reducers'
import CounterContainer from './containers/counter-container'

// middleware
const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore)

// create store although there is only one reducer
const store = createStoreWithMiddleware(combineReducers(reducers))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    )
  }
}
