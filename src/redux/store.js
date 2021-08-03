import { applyMiddleware, combineReducers, createStore } from 'redux'
import magazine from './reducers/magazine'
import post from './reducers/post'
import user from './reducers/user'
import { setUser } from './middleware/userCrud'

const reducer = combineReducers({ magazine, post, user })

const store = createStore(reducer, applyMiddleware(
    setUser
))
window.store = store
export default store
