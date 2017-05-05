const initialState = {
    filters:{},
    chips:[]
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
    	case 'ADD_FILTERS':
    		return {...state, filters: action.filters}
    	case 'ADD_CHIP':
    		return {...state, chips: [...state.chips, action.chip]}
      default:
          return state
    }
}