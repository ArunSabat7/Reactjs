// unmounting

import React, { Component } from 'react'

export default class App14 extends Component {
    componentDidMount(){
        console.log('parent mounted');
        
    }
    componentWillUnmount(){
        console.log('parent unmounted');
        
    }
    render() {
        console.log('parent rendered');
        
        return (
            <h3>
               parent component 
            </h3>
        )
    }
}
