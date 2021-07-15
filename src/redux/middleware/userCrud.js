import actions from '../action'

export const SetUser = ({ disaptch, getState }) => next => action => {
    if (action.type == 'SET_USER') {
        let url = "http://localhost:3001/"
        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(result => console.log(resutl))
            .catch(err => console.log(err))
    }
    return next(action)
}