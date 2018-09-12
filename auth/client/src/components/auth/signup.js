import React from 'react'
import {reduxForm , Field} from 'redux-form'

import {compose} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Signup extends React.Component {
    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature ')
        })
    }

    render () {
        const {handleSubmit} = this.props 

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>email</label>
                    <Field 
                        name='email'
                        type='text'
                        component='input'
                     />
                </fieldset>

                <fieldset>
                    <label>password</label>
                    <Field 
                        name='password'
                        type='password'
                        component='input'
                     />
                </fieldset>
                <div>
                    {this.props.errorMessage}
                </div>

                <button>Signup</button>
            </form>
        )
    }
}

const msp = state => {
    return {errorMessage: state.auth.errorMessage}
}

export default compose(
    connect(msp,actions),
    reduxForm({form: 'signup'})
)(Signup)