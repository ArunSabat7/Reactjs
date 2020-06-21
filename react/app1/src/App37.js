import React, { Component } from 'react'
import App37func from './App37func';

export default class App37 extends Component {
    constructor(props){
        super(props)
        this.state={
            hasErrors: false,
            planets: {}
        }
    }
    componentDidMount() {
        fetch("https://swapi.co/api/planets/") 
        .then(res => res.json())
        .then(res => this.setState({ planets: res }))
        .catch(() => this.setState({ hasErrors: true }));    
    }
    
    render() {
        return (
            <div>
                <h3>class Component</h3>
                <h3>results:</h3>
                <div>{JSON.stringify(this.state.planets)} </div>
                <App37func/>
            </div>
        )
    }
}
