const initialState = {
    restaurants:[],
    singleRes: {},
    activities: [],
    filters: {},
    directions: {}
}

export default function yelpReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_RESTAURANTS':
            return {...state, restaurants: action.restaurants}
        case 'SINGLE_RESTAURANT':
        	return {...state, singleRes: action.restaurant}
        case 'ADD_FILTERS':
    		return {...state, filters: action.filters}
    	case 'ADD_ACTIVITIES':
    		return {...state, activities: action.activities}
        case 'ADD_LOCATIONS':
            return {...state, directions: action.stops}
      default:
          return state
    }
}
      