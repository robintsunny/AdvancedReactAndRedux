import React from 'react'
import {reduxForm , Field} from 'redux-form'

class Signup extends React.Component {
    onSubmit = (formProps) => {
        console.log(formProps)
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

                <button>Signup</button>
            </form>
        )
    }
}

export default reduxForm({form: 'signup'})(Signup)