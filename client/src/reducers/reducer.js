const initialState = {
    favorites: [],
    restaurants:[],
    singleRes: {},
    activities: [],
    filters: {},
    directions: {},
    username:'',
    delivery: false,
    searchRadius: '',
    searchRating: '',
    foodTypes: {},
    actTypes: {},
    review: '',
    name: ''
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
        case 'SAVE_USERNAME':
            return {...state, username: action.username}
        case 'SAVE_REVIEW':
            return {...state, name: action.name, review: action.review}
        case 'UPDATE_FAVORITES':
            return {...state, favorites: action.favorites}
        case 'UPDATE_RADIUS':
            console.log(action)
            return {...state, searchRadius: action.radius}
        case 'UPDATE_RATING':
            return {...state, searchRating: action.rating}
        case 'UPDATE_FOODTYPES':
            return {...state, foodTypes: action.types}
        case 'UPDATE_ACTTYPES':
            return {...state, actTypes: action.types}
        case 'UPDATE_DELIVERY':
            return {...state, delivery: action.delivery}
      default:
          return state
    }
}
      