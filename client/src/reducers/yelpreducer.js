const initialState = {
    data:{}
}

export default function yelpReducer(state=initialState, action) {
    switch (action.type) {
    	case 'GET_RESTAURANT':
      	return  {...state, data: action.data}
      default:
          return state
    }
}
      