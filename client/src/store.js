import {combineReducers, createStore} from 'redux'
import filterReducer from './reducers/filters'
import yelpReducer from './reducers/yelpreducer'

const rootReducer = combineReducers({
	filterReducer,
	yelpReducer
})

const store = createStore(rootReducer)

export default store