const initialState = {
    filters:{},
    data:{}
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
    	case 'ADD_FILTERS':
    		return {...state, filters: action.filters}
    	case 'GET_RESTAURANT':
      	return  {...state, data: action.data}
      default:
          return state
    }
}