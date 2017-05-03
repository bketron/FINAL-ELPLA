import store from '../store'


export function filter() {
	store.dispatch({
		type: 'ADD_FILTER',
	})
}

export function filterChip () {
	store.dispach({
		type: 'ADD_CHIP',
	})
}