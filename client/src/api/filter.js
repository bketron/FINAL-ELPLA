import store from '../store'


export function filter(filter) {
	store.dispatch({
		type: 'ADD_FILTERS',
		filters
	})
}

export function filterChip () {
	store.dispach({
		type: 'ADD_CHIP',
	})
}