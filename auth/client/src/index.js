import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import Feature from './components/Feature'
import Welcome from './components/Welcome'
import Signup from './components/auth/signu p'

const store = createStore(
    reducers, 
    {}, 
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>

    <BrowserRouter>
        <App>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/feature' component={Feature} />
        </App>
    </BrowserRouter> 
    </Provider>,
    document.querySelector('#root') 
)