import React from 'react'
import { connect } from 'react-redux'

import Post from '../post/post'

function Magazine(props) {

    return (
        <>
            {
               props.magazines && props.magazines.map(magazine =>
                    <>
                        <div className="card" style={{ width: "400px", margin: "10px", float: "right" }}>
                            <img className="card-img-top" src={magazine.logo} style={{ width: "100%" }} />
                            {
                                magazine.map(post =>
                                    <Post post={post}></Post>
                                )
                            }
                        </div>
                    </>)
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return { magazines: state.magazines }
}

export default connect(mapStateToProps)(Magazine)