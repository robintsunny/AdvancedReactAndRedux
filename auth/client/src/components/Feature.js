import React from 'react'
import requireAuth from './requireAuth'

class Feature extends React.Component {
    render() {
        return (
            <div>FEATURE </div>
        )
    }
}

export default requireAuth(Feature)