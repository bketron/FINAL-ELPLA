const initialState = {
    restaurants:[]
}

export default function yelpReducer(state=initialState, action) {
    switch (action.type) {
        case 'GET_RESTAURANTS':
            return {...state, restaurants: action.data}
      default:
          return state
    }
}
      