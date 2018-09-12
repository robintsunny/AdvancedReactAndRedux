import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Signout extends React.Component {
    componentDidCatch () {
        this.props.signout()
    }
    
    
    render () {
        return (
            <div>BYEZZZ</div>
        )
    }
}

export default connect(null, actions)(Signout)