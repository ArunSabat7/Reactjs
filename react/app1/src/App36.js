import React, { Component } from 'react'
// import App36reg from './App36reg'
// import App36pure from './App36pure'
import App36memo from './App36memo'
export default class App36 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:1
        }
    }
componentDidMount(){
    setInterval(()=>{
        this.setState({name:this.state.name+1})
        },2000)
    }
// alternate of setInterval: use event handler
// click=()=>{
//     this.setState({name:'raj'})
// }

    render() {
        console.log('comp render')
        return (
            <>
             <h3>name: {this.state.name} </h3>   
             {/* <button onClick={this.click} >change</button> */}
            {/* <App36reg name={this.state.name} />
            <App36pure name={this.state.name} /> */}
            <App36memo name={this.state.name} />
            </>
        )
    }
}
