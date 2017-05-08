import store from '../store'


export function addFilters(filters) {
	store.dispatch({
		type: 'ADD_FILTERS',
		filters: filters
	})
}
<<<<<<< HEAD

=======
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
export function removeFilter(filter) {
	const appState = store.getState()

	var filters = appState.filters

	filters[filter] = ''

	store.dispatch({
		type: 'ADD_FILTERS',
		filters: filters
	})
<<<<<<< HEAD
} 
=======
} 
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
