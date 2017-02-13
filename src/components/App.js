import React, { Component } from 'react'
import DevTools from './DevTools'
import Header from './Header'
import Styles from'../styles/index'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' && <DevTools /> }
            </div>
        )
    }
}
