import React, { Component } from 'react'
import App12stc from './App12stc'

export default class App12st extends Component {
    render() {
        console.log('st-rendered, child of App12')
        return (
            <div>
                <h2>hello {this.props.name}</h2>
                <App12stc/>
            </div>
        )
    }
}
