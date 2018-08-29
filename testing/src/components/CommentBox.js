import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'


class CommentBox extends React.Component {
    state = { comment: '' }

    componentDidMount () {
        this.shouldNavigateAway()
    }
    
    componentDidUpdate () {
        this.shouldNavigateAway()
    }

    shouldNavigateAway () {
        if (!this.props.auth) {
            this.props.history.push('/')
        }
    }


    handleChange = (e) => {
        e.preventDefault()
        this.setState({comment: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.saveComment(this.state.comment)
        this.setState({comment: ''})
    }
    

    render() {

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>

                <button onClick={this.props.fetchComments} className="fetch-comments">
                    Fetch Comments
                </button>
            </div>
        )
    }
}

const msp = state => {
    return {auth: state.auth}
}

export default connect(msp, actions)(CommentBox)