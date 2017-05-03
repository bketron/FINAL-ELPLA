const initialState = {
    filters:[],
    chips:[]
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
    	case 'ADD_FILTER':
    		return {...state, filters: [...state.filters, action.filter]}
    	case 'ADD_CHIP':
    		return {...state, chips: [...state.chips, action.chip]}
      default:
          return state
    }
}