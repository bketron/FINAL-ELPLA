import io from 'socket.io-client'
import store from '../store'


export function addFilters(filters) {
    console.log(filters)
	store.dispatch({
		type: 'ADD_FILTERS',
		filters: filters
	})
}
export function removeFilter(filter) {
	const appState = store.getState()

	var filters = appState.filters

	filters[filter] = ''

	store.dispatch({
		type: 'ADD_FILTERS',
		filters: filters
	})
}