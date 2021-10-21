import produce from "immer";
import createReducer from '../reducerUtils'

const initalState = {
    user: undefined
}

const userFunctions = {
    setUser(state, action) {
        state.user = action.payload
    }
}

const reducer = produce((state, action) => {
    createReducer(state, action, userFunctions)
}, initalState)

export default reducer