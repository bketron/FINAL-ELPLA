const initialState = {
    filters:{}
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
      case 'ADD_FILTERS':
        return {...state, filters: action.filters}
      default:
          return state
    }
}