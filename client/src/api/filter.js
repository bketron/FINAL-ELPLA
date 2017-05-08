import store from '../store'


export function addFilters(filters) {
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

