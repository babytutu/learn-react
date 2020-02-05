// The reducer updates the count
const initialState = {
  title: 'Home'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE":
      const { title } = action
      return { ...state, title }
    default:
      return state;
  }
}

export default reducer