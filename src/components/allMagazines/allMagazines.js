import React from 'react'
import { connect } from 'react-redux'
import Magazine from '../magazine/magazine'

function AllMagazines(props) {
    return (
        <>
            {
                props.magazines.magazines.map(magazine => <Magazine magazine={magazine}></Magazine>)
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return { magazines: state.magazines }
}

export default connect(mapStateToProps)(AllMagazines)