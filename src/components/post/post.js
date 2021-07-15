import React from 'react'
import { connect } from 'react-redux'

function Post(props) {
    return (
        <>
            <div className="card" style={{ width: "400px", margin: "10px", float: "right" }}>
                <img className="card-img-top" src={props.post.imageCover} style={{ width: "100%" }} />
                <div className="card-body">
                    <h4 className="card-title">{props.post.title}</h4>
                    <p className="card-text">{props.post.description}</p>
                </div>
            </div>
        </>
    )
}



export default connect()(Post)