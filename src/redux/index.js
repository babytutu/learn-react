import { createStore } from 'redux'
import reducer from './reducers'
// The store holds the data
const store = createStore(reducer)

export default store