import produce from 'immer'
import createReducer from '../reducerUtils'

const initalState = {
    magazines:[]
}

const magazineFunction = {
    setMagazineFromServer(state, action){
        state.magazines = action.payload
    },
    addMagazine(state, action){
        state.magazines.push(action.payload)
    }
}

const reducer = produce((state, action) => {
    createReducer(state, action, magazineFunction)
}, initalState)

export default reducer
