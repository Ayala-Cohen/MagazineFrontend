import actions from '../action'

export const setPosts = ({ dispatch, getState }) => next => action => {
    if (action.type === "SET_POSTS") {
        let url = ""
        if(!getState().posts)
            dispatch(actions.setPosts)
    }
    return next(action)
}

