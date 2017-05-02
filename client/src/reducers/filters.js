const initialState = {
    filters:[]
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
    	case 'ADD_FILTER':
    		return {...state, filters: [...state.filters, action.filter]}
       default:
          return state
    }
}