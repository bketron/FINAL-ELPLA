const initialState = {
    favorites: [],
    filters:{},
    data:{},
    username:'',
    delivery: false,
    searchRadius: '',
    searchRating: '',
    foodTypes: {},
    actTypes: {}
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
    	case 'ADD_FILTERS':
    		return {...state, filters: action.filters}
    	case 'GET_RESTAURANT':
      	return {...state, data: action.data}
      case 'GET_ONE_RESTAURANT':
        return {...state, data: action.data}
      case 'GET_ACTIVITY':
        return {...state, data: action.data}
      case 'LOGIN':
        return {...state, username: action.username, password: action.password}
      case 'ADD_USER':
        return {...state, username: action.username, password: action.password}
      case 'SAVE_USERNAME':
        return {...state, username: action.username}
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
      case 'UPDATE_FAVORITES':
        return {...state, favorites: action.favorites}
      default:
          return state
    }
}