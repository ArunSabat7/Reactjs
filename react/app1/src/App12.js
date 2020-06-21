// lifecycle methods
// Mounting

import React, { Component } from 'react'
import App12st from './App12st'

export default class App12 extends Component {
    constructor(props){
        super(props)
        console.log('constru called');
        console.log(props);
        this.state={
            name:'raj',id:'101'
        }
    }
    
static getDerivedStateFromProps(props,state){
    console.log('get derived state from props');    
    console.log(state,props);
    return null
}    

componentDidMount(){
    console.log('App-component did mount-mounted')
}
    render() {
        console.log('rendered');
        
        return (
            <div>
                <App12st name='usa'/>
            </div>
        )
    }
}
