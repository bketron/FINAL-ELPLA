import store from '../store'


export function addFilters(filters) {
	store.dispatch({
		type: 'ADD_FILTERS',
		filters: filters
	})
}

export function filterChip (chip) {
	store.dispach({
		type: 'ADD_CHIP',
		chip
	})
}