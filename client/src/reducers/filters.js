const initialState = {
    filters:{}
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
<<<<<<< HEAD
      case 'ADD_FILTERS':
        return {...state, filters: action.filters}
=======
    	case 'ADD_FILTERS':
    		return {...state, filters: action.filters}
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
      default:
          return state
    }
}