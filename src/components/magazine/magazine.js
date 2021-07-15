import React from 'react'
import { connect } from 'react-redux'

function Magazine(props) {
    
    return (
        <>
            <div className="card" style={{ width: "400px", margin: "10px", float: "right" }}>
                <img className="card-img-top" src={ } alt={props.magazines} style={{ width: "100%" }} />
                <div className="card-body">
                    <p className="card-text">{props.magazines}</p>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { magazines: state.magazines }
}

export default connect(mapStateToProps)(Magazine)