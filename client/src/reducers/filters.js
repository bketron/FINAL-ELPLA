const initialState = {
    filters:{},
    data:{},
    username:'',
    password:''
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
      case 'ADD_USERNAME':
        return {...state, username: action.username}
      case 'ADD_PASSWORD':
        return {...state, password: action.password}
      default:
          return state
    }
}