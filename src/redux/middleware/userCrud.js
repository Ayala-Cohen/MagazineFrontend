import actions from '../action'

export const setUser = ({ dispatch, getState }) => next => action => {
    if (action.type == 'CHECK_AUTH') {
        let url = `http://localhost:3001/checkAuth/${action.payload.userName}/${action.payload.password}`
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': action.payload.token
            }
        })
            .then(response => {
                return response.json()
            })
            .then(result => {
                if (result.result.user) {
                    dispatch(actions.setUser(result.result.user))
                    dispatch(actions.setMagazines(result.result.user.magazine))
                }
            })
            .catch(err => console.log(err))
    }
    return next(action)
}