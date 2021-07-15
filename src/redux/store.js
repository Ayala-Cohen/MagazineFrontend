import {combineReducer, createStore} from 'redux'
import magazine from './reducers/magazine'
import post from './reducers/post'

const reducer = combineReducer({magazine, post})

const store = createStore(reducer)
window.store = store
export default store
