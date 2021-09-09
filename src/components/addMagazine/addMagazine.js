import React, { useState } from 'react'
import './addMagazine.css'
import { connect } from 'react-redux'
import actions from '../../redux/action'

function AddMagazine(props) {
    const [magazine, setMagazine] = useState({ logo: "", title_text: "", title_color: "", hello_bar_title: "", hello_bar_color: "", hello_bar_button: "", hello_bar_button_color: "", user: {} })
    const changeProperty = (e) => {
        let element_id = e.target.id
        let element_value = e.target.value
        setMagazine({ ...magazine, [element_id]: element_value })
    }

    const saveMagzineInServer = () => {
        props.saveMagazine(magazine)
    }
    return (
        <>
            <div className="asideMenu">
                <input type="radio" value="Title" id="title" name="titleOrLogo" onChange={changeProperty} />
                <label for="title">Title</label>
                <input type="radio" value="Logo" id="logo" name="titleOrLogo" onChange={changeProperty} />
                <label for="logo">Logo</label><br />

                <label>Title Color</label>
                <input type="color" onChange={changeProperty} id="title_color" /><br />
                <input className="input-text" type="text" placeholder="a title for the magazine" id="title_text" onChange={changeProperty} /><br />

                <label>Newaflash & Line Color</label>
                <input type="color" value="#009999" onChange={changeProperty} /><br />
                <label>Hello Bar Title</label><br />
                <input className="input-text" type="text" placeholder="hello bar title" id="hello_bar_title" onChange={changeProperty}></input><br />
                <label>Hello Bar Color</label>
                <input type="color" onChange={changeProperty} id="hello_bar_color" /><br />
                <label>Hello Bar Button</label><br />
                <input className="input-text" type="text" placeholder="hello bar" id="hello_bar_button" onChange={changeProperty}></input><br />
                <label>Hello Bar Button Color</label>
                <input type="color" value="#ff0000" id="hello_bar_button_color" /><br />
                <button onClick={saveMagzineInServer}>SAVE</button>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // saveMagazine: (magazine) => dispatch(actions.saveMagazine(magazine))
    }
}
export default connect(null, mapDispatchToProps)(AddMagazine)