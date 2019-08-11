import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

// eslint-disable-next-line react/prop-types
const NodeBird = ({ Component, store }) => {
    return (
        <>
            <Provider store={store}>
                <div>
                    <Component />
                </div>
            </Provider>
        </>
    )
}

NodeBird.propTypes = {
   Component: PropTypes.elementType, 
}

export default withRedux((initialState, options) => {
    const middlewares = []
    const enhancer = compose(applyMiddleware(...middlewares),
    !options.isServer &&
    window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    const store = createStore(reducer, initialState, enhancer)
    return store
})(NodeBird)