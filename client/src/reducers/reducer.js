const initialState = {
    restaurants:[],
    singleRes: {},
    filters: {}
}

export default function yelpReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_RESTAURANTS':
            return {...state, restaurants: action.restaurants}
        case 'SINGLE_RESTAURANT':
        	return {...state, singleRes: action.restaurant}
        case 'ADD_FILTERS':
    		return {...state, filters: action.filters}
      default:
          return state
    }
}
      