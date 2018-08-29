import React from 'react'
import { connect } from 'react-redux';

class CommentList extends React.Component {
    renderComments (props) {
        return this.props.comments.map((comment,id) => {
            return <li key={id}>{comment}</li>
        })
    }


    render () {
        return (
            <div>
                <ul>
                    <h4>Comment List</h4>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const msp = (state) => {
    return ({
        comments: state.comments
    })
}

export default connect(msp)(CommentList)