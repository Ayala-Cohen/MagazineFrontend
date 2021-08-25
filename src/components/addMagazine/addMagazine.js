import React from 'react'

function AddMagazine() {
    return (
        <>
            <input type="radio" value="Title" id="title" name="titleOrLogo" />
            <label for="title">Title</label>
            <input type="radio" value="Logo" id="logo" name="titleOrLogo"/>
            <label for="logo">Logo</label><br />
            <label>Title Color</label>
            <input type="color" value="rgb(0, 0, 0)" /><br />
            <input type="text" /><br />

            <label>Newaflash & Line Color</label>
            <input type="color" value="rgb(0, 0, 0)" /><br />
            <label>Hello Bar Title</label>
            <input type="text"></input><br />
            <label>Hello Bar Color</label>
            <input type="color" value="rgb(0, 0, 0)" /><br />
            <label>Hello Bar Button</label>
            <input type="text"></input><br />
            <label>Hello Bar Button Color</label>
            <input type="color" value="rgb(0, 0, 0)" /><br />
            <button >save</button>
        </>
    )
}
export default AddMagazine