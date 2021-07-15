import React from 'react'
import { connect } from 'react-redux'
import Post from '../post/post'

function AllPost(props) {
    return (
        <>
            {
                props.posts.posts && props.posts.posts.map(post => <Post post={post}></Post>)
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(AllPost)