import {createStore} from 'redux'
import filterReducer from './reducers/filters'

const store = createStore(filterReducer)

export default store