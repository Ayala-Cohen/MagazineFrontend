import actions from '../action'

export const setUser = ({ disaptch, getState }) => next => action => {
    if (action.type == 'CHECK_AUTH') {
        let url = `http://localhost:3001/checkAuth/${action.payload.userName}/${action.payload.password}`
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': action.payload.token
            }
        })
            .then(response => response.json())
            .then(result =>
                disaptch(actions.setUser(result.user)))
            .catch(err => console.log(err))
    }
    return next(action)
}