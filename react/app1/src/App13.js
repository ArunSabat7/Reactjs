// updating

import React, { Component } from 'react'
import App13st from './App13st'

export default class App13 extends Component {
    constructor(){
        super()
    this.state={
        id:101
}

    }
    clickhandle= ()=> {
        console.log('button clicked');
        // this.setState({id:102})
        this.setState({id:this.state.id+3})
    
    }

    render() {
        console.log('parent rendered');
        
        return (
            <div>
        <App13st id={this.state.id} />        
        <button onClick={this.clickhandle} >change</button>
            </div>
        )
    }
}
