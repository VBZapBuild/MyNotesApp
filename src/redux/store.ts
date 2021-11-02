import { combineReducers, createStore } from 'redux'
import taskReducer from './taskState'
import counterReducer from './counter/counterStore'

const reducers = combineReducers({
   count: counterReducer
})

const store = createStore(reducers)

export default store