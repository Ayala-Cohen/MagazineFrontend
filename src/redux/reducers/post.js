import produce from "immer";
import createReducer from '../reducerUtils'

const initalState = {
    posts: []
}

const postFunctions = {
    setPosts(state, action) {
        state.posts = action.payload
    },
    addPost(state, action) {
        state.posts.push(action.payload)
    },
    deletePost(state, action) {
        let index = state.post.findIndex(post => post._id == action.payload)
        state.posts.splice(index, 1)
    }
}

const reducer = produce((state, action) => {
    createReducer(state, action, postFunctions)
}, initalState)

export default reducer