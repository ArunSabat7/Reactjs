import React, { Component } from 'react'

export default class App14st extends Component {
    componentDidMount(){
        console.log('child mounted');
        
    }
    componentWillUnmount(){
        console.log('child unmounted');
        
    }
    render() {
        console.log('child rendered');
        
        return (
            <h3>
                child component
            </h3>
        )
    }
}
