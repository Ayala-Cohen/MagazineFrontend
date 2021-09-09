import actions from "../action";

export const saveMagazine = ({ dispatch, getState }) => next => action => {
    if(action.type === "SAVE_MAGAZINE"){
        let url = "http://localhost:3001/createMagazine"
        let options = { 
            method: 'POST' ,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        }
        fetch(url, options)
            .then(response => response.json())
            .then(result => {
                if (result)
                    dispatch(actions.setMagazineFromServer(result.result))
            })
            .catch(err => console.log(err)
            )
    }
    return next(action)
}