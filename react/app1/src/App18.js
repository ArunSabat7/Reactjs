import React, { Component } from 'react'
import App18user from './App18user'
import App18guest from './App18guest'
export default class App18 extends Component {
    render() {
        const isReg=this.props.consumer
    if(!isReg){
        return <App18user/>
    }
    return <App18guest/>
    }
}

