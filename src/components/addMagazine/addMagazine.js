import React from 'react'
import './addMagazine.css'

function AddMagazine() {
    const changeProperty = () => {
        
    }
    return (
        <>
            <div className="asideMenu">
                <input type="radio" value="Title" id="title" name="titleOrLogo" />
                <label for="title">Title</label>
                <input type="radio" value="Logo" id="logo" name="titleOrLogo" />
                <label for="logo">Logo</label><br />
                <label>Title Color</label>
                <input type="color"  /><br />
                <input className="input-text" type="text" placeholder="a title for the magazine" onChange={changeProperty}/><br />

                <label>Newaflash & Line Color</label>
                <input type="color" value="#009999" onChange={changeProperty}/><br />
                <label>Hello Bar Title</label><br/>
                <input className="input-text" type="text" placeholder="hello bar title" onChange={changeProperty}></input><br />
                <label>Hello Bar Color</label>
                <input type="color"  onChange={changeProperty}/><br />
                <label>Hello Bar Button</label><br/>
                <input className="input-text" type="text" placeholder="hello bar" onChange={changeProperty}></input><br />
                <label>Hello Bar Button Color</label>
                <input type="color" value="#ff0000" /><br />
                <button>SAVE</button>
            </div>
        </>
    )
}
export default AddMagazine