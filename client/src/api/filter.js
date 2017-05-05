import store from '../store'


export function addFilters(filters) {
	store.dispatch({
		type: 'ADD_FILTERS',
		filters: filters
	})
}
