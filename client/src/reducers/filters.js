const initialState = {
    favorites: [],
    filters:{},
    data:{},
    username:''
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
      case 'UPDATE_FAVORITES':
        return {...state, favorites: action.favorites}
      default:
          return state
    }
}