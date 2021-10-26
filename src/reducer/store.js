import {createStore} from 'redux'
import taskReducer from './taskState'

const store = createStore(taskReducer)

export default store