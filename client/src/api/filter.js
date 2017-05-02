import store from '../store'

export function filter() {
	store.dispatch({
		type: 'ADD_FILTER',
	})
}