// composition

import React, { Component } from 'react'
import App40emp from './App40emp'
import './App40.css'
export default class App40 extends Component {
    render() {
        return (
            <div>
            <App40emp color='red' name='shah' dept='h2' salary='400k'/>
            <App40emp color='green' name='raj' dept='h1' salary='200k'/>
            <App40emp color='blue' name='modi' dept='h3' salary='300k'/>
            {this.props.data}
            {this.props.children}
            </div>
        )
    }
}
